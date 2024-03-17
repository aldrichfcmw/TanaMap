// Inisialisasi Toastr
function showToast(message, type) {
    if (type === "success") {
        toastr.success(message);
    } else if (type === "error") {
        toastr.error(message);
    } else if (type === "warning") {
        toastr.warning(message);
    } else if (type === "info") {
        toastr.info(message);
    }
}
