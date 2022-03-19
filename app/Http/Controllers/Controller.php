<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Redirect;
use App\Models\User;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index(){
        return Inertia::render('Auth/Index', [
            'users' => User::all(),
            'column' => ['id' => '#', 'name' => 'الاسم', 'role' => 'الحالة', 'created_at' => 'تاريخ الاضافة']
        ]);
    }

    public function edit($id){
        return Inertia::render('Auth/Edit', [
            'user' => User::findOrFail($id),
        ]);
    }

    public function update(Request $request, $id){
        $user = User::findOrFail($id);

        if(($request->name !== $user->name) || ($request->password !== null) || ($request->role !== $user->role)){
            if($request->name !== $user->name){
                $request->validate([
                    'name' => 'required|string|unique:users,name',
                ],[
                    'name.required' => 'يجب ادخال اسم المستخدم',
                    'name.string' => 'اسم المستخدم غير صالح',
                    'name.unique' => 'اسم المستخدم موجود فعلاً',
                ]);
            }
            if($request->password !== null){
                $request->validate([
                    'password' => 'nullable|min:8|confirmed',
                ],[
                    'password.min' => 'كلمة المرور يجب ان تكون على الاقل 8 حروف',
                    'password.confirmed' => 'كلمة المرور غير متطابقة',
                ]);
            }
            if($request->role !== $user->role){
                $request->validate([
                    'role' => 'nullable|integer',
                ],[
                    'role.integer' => 'صلاحية المستخدم غير صالحة',
                ]);
            }
            $user->update([
                'name' => $request->name,
                'password' => bcrypt($request->password),
                'role' => $request->role,
            ]);
            return Redirect::route('users.index')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم تعديل بيانات المستخدم']);
        }
        return Redirect::back();
    }

    public function delete($id){
        $user = User::findOrFail($id);
        $user->delete();
        return Redirect::route('users.index')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم حذف المستخدم']);
    }
}
