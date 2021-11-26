<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable,HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $guarded=[];
    // protected $appends = [
    //     'profile_photo_url',
    // ];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'token'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function getThumbnailAttribute($value)
    {
        if(!empty($value))
        return asset('/img/users/'.$value);
        else
        return asset('/img/users/default-profile.png');
    }



    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function userCreateOrUpdate($request,$type="create"){

        if($type == 'create'){
            return User::create($request);
        }
        else {
            return User::where('id',$request['id'])->update($request);
        }
    }
}
