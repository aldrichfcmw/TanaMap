<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
@if($message = Session::get('success'))
  <script>
    Swal.fire({
                icon: 'success', // Tipe ikon (success, error, warning, info)
                text: '{{ $message }}', // Pesan toast
                toast: true, // Tentukan bahwa ini adalah toast
                position: 'bottom-end', // Posisi toast (top-start, top-end, bottom-start, bottom-end)
                showConfirmButton: false, // Tampilkan tombol OK
                background:"#fff",
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
                }
            });
  </script>
@endif
@if($message = Session::get('error'))
  <script>
    Swal.fire({
                icon: 'error', // Tipe ikon (success, error, warning, info)
                text: '{{ $message }}', // Pesan toast
                toast: true, // Tentukan bahwa ini adalah toast
                position: 'bottom-end', // Posisi toast (top-start, top-end, bottom-start, bottom-end)
                showConfirmButton: false, // Tampilkan tombol OK
                background:"#fff",
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
  </script>
@endif