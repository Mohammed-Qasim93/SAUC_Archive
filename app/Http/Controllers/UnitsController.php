<?php

namespace App\Http\Controllers;

use App\Models\Units;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UnitsController extends Controller
{
    public function index()
    {
        return Inertia::render('Units/Index', [
            'units' => Units::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Units/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string'
        ],[
            'name.required' => 'يجب ادخال اسم الوحدة او القسم',
            'name.string' => 'الاسم المدخل غير صالح'
        ]);
    }

    public function show(Units $units)
    {
        //
    }

    public function edit(Units $units)
    {
        return Inertia::render('Units/Edit', [
            'unit' => $units
        ]);
    }

    public function update(Request $request, Units $units)
    {
        //
    }

    public function destroy(Units $units)
    {
        //
    }
}
