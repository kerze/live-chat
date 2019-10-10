<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entries extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function entries()
    {
        return $this->belongsTo('App\Entries');
    }

    protected $fillable = [
        'user_id', 'text', 'replied_id'
    ];
}