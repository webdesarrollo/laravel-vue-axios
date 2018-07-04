@extends('layouts.inicio')
@section('contenido')
<div id="main">
  <p>randomuser.me documentos resultaddos link</p>
  <p class="text-muted">v-on:keyup.enter="addName" al precionar enter se mandaria</p>
  <div class="row">
    <div class="col-md-8">
      <form v-on:submit.prevent="addName">
        <div class="form-group">
        <input type="text" class="form-control"  v-model="name">
        <h2 v-model="name">@{{ name }}</h2>
        <span class="input-group-btn">
          <input type="submit" class="btn btn-sm btn-default" value="add">
        </span>
      </div>
      </form>
      <button type="button" class="btn-primary" v-on:click="num += 1">
        @{{ num }} <i class="fas fa-thumbs-up"></i>
      </button>
      <hr>
      <ul class="list-group">
        <li class="list-group-item" v-for="item in people">
          @{{ item }}
        </li>
      </ul>
    </div>
    <hr>
    <div class="col-md-4">
      <pre>
        @{{ $data }}
      </pre>
    </div>
  </div>
</div>
@endsection
