<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    protected $fillable = [
        'subject',
        'solution',
        'module_id',
    ];

    public function module()
    {
        return $this->belongsTo(Module::class);
    }

}
