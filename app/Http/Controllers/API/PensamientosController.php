<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Pensamiento;
use Auth;

class PensamientosController extends Controller
{

    public function __construct(){
      $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return Pensamiento::where('user_id',auth()->id())->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $id=Auth::user()->id;
        $pensamiento  = new Pensamiento();
        $pensamiento->descripcion=$request->descripcion;
        $pensamiento->user_id=$id;
        $pensamiento->save();
        return $pensamiento;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $id=Auth::user()->id;
      $pensamiento  = Pensamiento::find($id);
      $pensamiento->descripcion = $request->descripcion;
      $pensamiento->user_id=$id;
      $pensamiento->save();
      return $pensamiento;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $pensamiento=Pensamiento::findOrFail($id);
      $pensamiento->delete();
    }
}
