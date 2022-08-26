<?php

namespace App\Http\Controllers;

use App\Http\Resources\ModuleResource;
use App\Models\Module;
use Illuminate\Http\Request;

class ModulesController extends Controller
{
    public function index()
    {

    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        $req_fields = json_decode($request->fields);
        $fields = [];
        $rules = [];
        $css = [];
        $classes = [];

        foreach ($req_fields as $id => $field) {
            $name = $request->get("field-${id}-name");

            $fields[$name] = [
                "type" => "field-${id}-type",
                'label' => "field-${id}-label",
                'default' => "field-${id}-default",
                'red_text' => "field-${id}-red"
            ];


            $rules[$name] = [];

            foreach ($request->all() as $label => $input) {
                if (str_contains($label, "field-${id}-rule-")) {
                    $rule = str_replace("field-${id}-rule-", '', $label);

                    switch ($rule) {
                        case "required":
                            $rules[$name]['required'] = (bool)$input;
                            break;
                        case "length-min":
                            $rules[$name]['length-min'] = $input == null ? null : (int)$input;
                            break;
                        case "length-max":
                            $rules[$name]['length-max'] = $input == null ? null : (int)$input;
                            break;
                        case "email":
                            $rules[$name]['email'] = (bool)$input;
                            break;
                        case "min":
                            $rules[$name]['min'] = $input == null ? null : (int)$input;
                            break;
                        case "max":
                            $rules[$name]['max'] = $input == null ? null : (int)$input;
                            break;
                        case "size":
                            $rules[$name]['size'] = $input == null ? null : (int)$input;
                            break;
                        case "mimes":
                            $rules[$name]['mimes'] = $input == null ? null : $input;
                    }
                } else if (str_contains($label, "field-${id}-class-")){
                    $div =  str_replace("field-${id}-class-", '', $label);
                    $classes[$name][$div] = $input == null ? null : $input;
                } else if (str_contains($label, "field-${id}-css-")){
                    $div =  str_replace("field-${id}-css-", '', $label);
                    $css[$name][$div] = $input == null ? null : $input;
                }
            }
        }

        $module = Module::create(
            [
                'name' => $request->name,
                'description' => $request->description,
                'image' => $request->image,
                'fields' => $fields,
                'rules' => $rules,
                'css' => $css,
                'classes' => $classes,
                'for_institute' => (boolean)$request->for_institute,
                'is_hidden' => 0,
                'added_by' => 1,
            ]
        );

        return new ModuleResource($module);
    }

    public function show(Module $module)
    {
        return new ModuleResource($module);
    }

    public function edit(Module $module)
    {
    }

    public function update(Request $request, Module $module)
    {
    }

    public function destroy(Module $module)
    {
    }
}
