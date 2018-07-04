@extends('layouts.inicio')
@section('contenido')
<div id="app">
  @{{ message }}
  <div id="appVue">
    <div class="row">
      <div class="col-sm-6 col-md-6">
        <h2 v-if="lista.length > 0">Agragar tarea</h2>
        <h2 v-else="lista">Crear nueva tarea</h2>
        <input type="text" class="form-control" v-model="nuevaTarea" v-on:keyup.enter="addTarea">
      </div>
      <div class="col-sm-6 col-md-6">
        <h3 v-if="lista.length > 0">Listado de tareas</h3>
        <h3 v-else="lista">No hay tareas registradas</h3>
        <ul class="list-group">
          <li class="list-group-item"
            v-for="item in lista"
            v-bind:class="item.completada == true ? 'disabled' : ''"
            @click="item.completada =! item.completada"
            >
            @{{ item.tarea }},
            @{{ item.completada }}
          </li>
        </ul>
      </div>
        <div class="col-md-12">
          <hr>
          <pre>
            @{{ $data | json }}
          </pre>
        </div>
    </div>
  </div>
</div>
@endsection
