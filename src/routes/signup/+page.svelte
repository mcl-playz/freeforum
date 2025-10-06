<div class="flex justify-center">
    <div class="box-rounded w-md flex items-center justify-center">
        <form>
            <h2 class="text-center">Sign Up</h2>
            
            <section>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </section>
            <section>
                <label for="username">Username</label>
                <input id="username" name="username" placeholder="Username" required />
            </section>
            <section>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required />
            </section>
            <section>
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
            </section>
            <section>
                <label for="agreements" class="flex items-center space-x-4">
                    <input type="checkbox" id="agreements" name="agreements" required />
                    <p class="text-sm">I agree to the <a href="/terms" class="underline">Terms of Service</a> and <a href="/privacy" class="underline">Privacy Policy</a></p>
                </label>
            </section>

            <button class="mx-auto block">Sign Up</button>
        </form>
    </div>
</div>