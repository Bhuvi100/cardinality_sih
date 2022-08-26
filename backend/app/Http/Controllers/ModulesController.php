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
