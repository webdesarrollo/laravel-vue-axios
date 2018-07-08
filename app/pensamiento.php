<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pensamiento extends Model
{
    protected $table = 'pensamientos';

    protected $fillable=['descripcion','user_id'];
}
