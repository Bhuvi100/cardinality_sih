<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Institute extends Model
{
    protected $fillable = [
        'user_id',
        'institute_code',
        'institute_name',
        'state',
        'mobile',
        'verification_document',
        'approved_by',
        'approved_at',
    ];
}
