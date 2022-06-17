import Swal from 'sweetalert2';

export const viewAlert = (type, message) => {
  type = type.toLowerCase();

  switch (type) {
    case 'success': return Swal.fire({
      text: message,
      icon: 'success',
      timer: 3000,
    });

    case 'confirm': return Swal.fire({
      title: message,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) return true;
      else if (result.isDenied) return false;
    });
  }
};
