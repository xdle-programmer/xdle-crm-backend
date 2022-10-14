<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Advoor\NovaEditorJs\NovaEditorJsCast;

class Post extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'image_path',
        'text',
        'publish_date',
        'user_id'
    ];

    protected $casts = ['publish_date' => 'date', 'about' => NovaEditorJsCast::class,];


    public function user()
    {
        return $this->belongsTo(User::class, "user_id");
    }
}
