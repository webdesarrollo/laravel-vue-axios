@extends('layouts.inicio')
@section('title','Laravel + Vue.js - Crud')
@section('contenido')
<div id="crud">
  <div class="row">
    <div class="col-sm-7">
      <a href="#" class="btn btn-primary float-right" data-toggle="modal" data-target="#create">Nueva tarea</a>
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th>Tarea</th>
            <th colspan="2">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="keep in keeps">
            <td>@{{ keep.keep }}</td>
            <td>
              <div class="btn-group">
                <a href="#" class="btn btn-warning btn-sm" width="10px" v-on:click.prevent="editKeep(keep)">
                  <i class="fa fa-edit"></i>
                </a>
                <a href="#" class="btn btn-danger btn-sm" width="10px" v-on:click.prevent="deleteKeeps(keep)">
                  <i class="fa fa-trash"></i>
                </a>
            </div>
            </td>
          </tr>
        </tbody>
      </table>

      <nav >
        <ul class="pagination">
          <li v-if="pagination.current_page > 1" class="page-item">
            <a href="#" class="page-link" @click.prevent="changePage(pagination.current_page-1)">
              <span>Atras</span>
            </a>
          </li>

          <li v-for="page in pagesNumber" v-bind:class="[ page == isActived ? 'active' : '']" class="page-item">
            <a href="#" @click.prevent="changePage(page)" class="page-link">
              @{{ page }}
            </a>
          </li>

          <li  v-if="pagination.current_page < pagination.last_page" class="page-item">
            <a href="#" class="page-link" @click.prevent="changePage(pagination.current_page+1)">
              <span>Siguiente</span>
            </a>
          </li>
        </ul>
      </nav>

      @include('inicio.create')
      @include('inicio.edit')
    </div>
    <div class="col-sm-5">
      <pre>
        @{{ $data }}
      </pre>
    </div>
  </div>
</div>
@endsection
