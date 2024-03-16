@extends('layouts.main')
@section('content')
<div class="card">
    <h5 class="card-header">Light Table head</h5>
    <div class="table-responsive text-nowrap">
      <table class="table">
        <thead class="table-light">
          <tr>
            <th>No.</th>
            <th>Users</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="table-border-bottom-0">
            @foreach ($data as $key => $d)
              <tr>
                <td>{{ $key+1 }}</td>
                <td>{{ $d -> name }}</td>
                <td>{{ $d -> email }}</td>
                <td>
                    <div class="dropdown">
                      <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="{{url('/dashboard')}}"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                        <a class="dropdown-item" href="{{url('/dashboard')}}"><i class="bx bx-trash me-1"></i> Delete</a>
                      </div>
                    </div>
                </td>
              </tr>
            @endforeach
        </tbody>
      </table>
    </div>
</div>
@endsection