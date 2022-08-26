<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    protected $table = 'modules';

    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'description',
        'image',
        'fields',
        'rules',
        'css',
        'classes',
        'for_institute',
        'is_hidden',
        'added_by'
    ];

    protected $casts = [
        'fields' => 'array',
        'rules' => 'array',
        'css' => 'array',
        'classes' => 'array',
    ];

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::addGlobalScope('hidden', function (Builder $builder) {
            $builder->where('is_hidden', '=', false);
        });
    }

    public function adder()
    {
        return $this->belongsTo(User::class);
    }

    public static function getPublicBase()
    {
        return self::withoutGlobalScope('hidden')->find(1);
    }

    public static function getInstituteBase()
    {
        return self::withoutGlobalScope('hidden')->find(2);
    }

    public function getBase()
    {
        return $this->for_institute ? self::getInstituteBase() : self::getPublicBase();
    }
}
