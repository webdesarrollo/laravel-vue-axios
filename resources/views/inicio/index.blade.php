@extends('layouts.inicio')
@section('contenido')
<div id="main">
  <div class="row">
    <div class="col-sm-4">
      <h1>Componente</h1>
      <h3>ALBUM</h3>
      <common-list v-bind:lists="albums"></common-list>
    </div>
    <div class="col-sm-4">
      <h3>POSTS</h3>
      <common-list v-bind:lists="posts"></common-list>
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
