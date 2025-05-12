<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $table = "patients";

    protected $fillable = [
        'firstname',
        'lastname',
        'age',
        'gender',
        'address',
        'medicalHistory',
    ];
}
