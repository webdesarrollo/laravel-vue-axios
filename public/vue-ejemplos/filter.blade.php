@extends('layouts.inicio')
@section('contenido')
<div id="main">
  <div class="row">
    <div class="col-sm-4">
      <h1>Vue js - filtros</h1>
      <button type="button" class="btn btn-primary" v-on:click="getUsers" v-if="!lists.length">
        Listar
      </button>
      <ul class="list-group" v-else>
        <li class="list-group-item">
          <input type="text" placeholder="busccar" class="form-control" v-model="name">
        </li>
        <li class="list-group-item" v-for="item in searchUser">
          @{{ item.name }}
        </li>
      </ul>
    </div>
    <hr>
    <div class="col-sm-12">
      <pre>
        @{{ $data }}
      </pre>
    </div>
  </div>
</div>
@endsection
