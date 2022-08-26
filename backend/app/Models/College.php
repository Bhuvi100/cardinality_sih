<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class College extends Model
{
    public static function getColleges(string $state, string $query)
    {
        return self::selectRaw("id as value,CONCAT(name,', ',district) as name")->where('state', $state)->where('name', 'LIKE', "${query}%")->limit(15)->get();
    }
}
