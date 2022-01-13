const Signin = {
    render() {
        return `
        <div class="bg-white max-w-md mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Đăng nhập
            </h2>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Email">
            </div>
            <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
                <p class="text-red-600 text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" type="button">
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                    Forgot Password?
                </a>
            </div>
        </div>`;
    },
};

export default Signin;