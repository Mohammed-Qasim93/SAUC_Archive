<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:25',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => 'required|string',
        ],[
            'name.required' => 'يجب ادخال الاسم',
            'name.string' => 'الاسم غير صالح',
            'name.max' => 'الاسم يجب ان لا يزيد عن 25 حرف',
            'password.required' => 'يجب ادخال كلمة المرور',
            'password.confirmed' => 'كلمة المرور غير متطابقة',
            'role.required' => 'يجب تحديد الحالة',
            'role.string' => 'الصلاحية غير صحيحة',
        ]);

        $user = User::create([
            'name' => $request->name,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME)->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تمت الاضافة']);;
    }
}
