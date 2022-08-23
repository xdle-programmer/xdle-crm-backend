<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContentTest extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content'
    ];
}
