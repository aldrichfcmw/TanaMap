@extends('layouts.user')
@section('content')
<div class="row">
  <div class="col-12">
    <div class="card">
      <h5 class="card-header">Light Table head</h5>
      <div class="table-responsive text-nowrap">
        <table class="table">
          <thead class="table-light">
            <tr>
              <th>No.</th>
              <th>Users</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="table-border-bottom-0">
              @foreach ($data as $key => $d)
                <tr>
                  <td>{{ $key+1 }}</td>
                  <td>{{ $d -> name }}</td>
                  <td>{{ $d -> username }}</td>
                  <td>{{ $d -> email }}</td>
                  <td>
                      <div class="dropdown">
                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="{{route('user.edit',['username'=> $d->username])}}"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                          <button class="dropdown-item" onclick="confirmDelete('{{ $d->id }}','{{ $d->username }}')"><i class="bx bx-trash me-1"></i> Delete</button> 
                          {{-- <button class="dropdown-item" data-toggle="modal" data-target="#deleteModal{{ $d->username }}"><i class="bx bx-trash me-1"></i> Delete</button>                         --}}
                        </div>
                      </div>
                      
                      <!-- Modal -->
                      <div class="modal fade" id="deleteModal-{{ $d->id }}" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="modalCenterTitle">Konfirmasi Penghapusan</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5>Apakah Anda yakin ingin menghapus pengguna <span id="user">{{ $d->username }}</span>?</h5>
                              
                            </div>
                            <div class="modal-footer">
                              <form action="{{route('user.delete',['username'=> $d->username])}}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Batal</button>
                                <button type="submit" class="btn btn-warning">Ya, Hapus</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                  </td>
                </tr>
              @endforeach          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<script>
  function confirmDelete(userId,userName) {
      $('#deleteModal-'+userId).modal('show');
  }
</script>

@endsection

