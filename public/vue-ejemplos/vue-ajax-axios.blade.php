@extends('layouts.inicio')
@section('contenido')
<div id="main">
  <p>randomuser.me documentos resultaddos link</p>
  <div class="row">
    <div class="col-sm-8">
      <h1>JSON</h1>
      <ul class="list-group">
        <li v-for="item in lists" class="list-group-item">
          @{{ item.gender }} - @{{ item.name.first }}, @{{ item.name.last }}
        </li>
      </ul>
    </div>
    <div class="col-sm-4">
      <pre>
        @{{ $data | json }}
      </pre>
    </div>
  </div>
</div>
@endsection
