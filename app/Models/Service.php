<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $guarded=[];

        public function getThumbnailAttribute($value)
        {
            if(!empty($value))
            return asset('/img/users/'.$value);
            else
            return asset('/img/users/default-profile.png');
        }
        public function getNameAttribute($value)
        {
          
            return ucfirst($value);
        }
}
