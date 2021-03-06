<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Books extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'desc',
        'status',
        'units_id'
    ];
    
    use SoftDeletes;
    
    public function images(){
        return $this->morphMany(Images::class, 'img');
    }

    public function users(){
        return $this->belongsToMany(User::class);
    }
}
