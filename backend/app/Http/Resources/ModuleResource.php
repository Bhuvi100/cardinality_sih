<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Storage;

/** @mixin \App\Models\Module */
class ModuleResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'image' => Storage::disk('public')->url($this->image),
            'fields' => array_merge($this->getBase()->fields, $this->fields),
            'rules' => array_merge($this->getBase()->rules, $this->rules),
            'css' => array_merge($this->getBase()->css, $this->css),
            'classes' => array_merge($this->getBase()->classes, $this->classes),
            'for_institute' => $this->for_institute,
            'added_by' => $this->added_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
