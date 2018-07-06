<!doctype html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <title>@yield('title','Laravel + Vue.JS')</title>
  </head>
  <body class="bg-light">
    <div class="container">
      <h1><i class="fas fa-home"></i> Hello, world!</h1>
      @yield('contenido')
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="{{ asset('js/app.js') }}"></script>
    @yield('scripts')
  </body>
</html>
