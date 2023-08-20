$first_facebook_access_token = Http::get("https://graph.facebook.com/v12.0/oauth/access_token?client_id=331680091973506&redirect_uri=https://bilindo.ir/owner/code&client_secret=3f776bc9dced8da8f209ab70723f4ffd&code=" . $request->code);


        $response = Http::get('https://graph.facebook.com/v11.0/me/accounts?access_token=' . $first_facebook_access_token['access_token']);
        $page_id = json_decode($response)->data[0]->id;
        $response = Http::get('https://graph.facebook.com/v11.0/' . $page_id . '?fields=access_token&access_token=' . $first_facebook_access_token['access_token']);
        $page_access_token = json_decode($response)->access_token;
        $long_page_access_token = $this->get_long_lived_access_token($page_access_token);
        $response = Http::get('https://graph.facebook.com/v11.0/' . $page_id . '?fields=instagram_business_account&access_token=' . $first_facebook_access_token['access_token']);
        $instagram_business_account_id = json_decode($response)->instagram_business_account->id;
        $owner->update(['instagram_user_id' => $instagram_business_account_id, 'user_access_token' => $first_facebook_access_token['access_token'], 'page_id' => $page_id, 'page_access_token' => $page_access_token, 'instagram_business_account_id' => $instagram_business_account_id]);
        return redirect(env('APP_URL')."/".'dashboard/product/index')->with(["message_successful_login"=>"Facebook login done successfully"]);
    }


    public function get_long_lived_access_token($page_access_token)
    {

        $response = Http::get('https://graph.facebook.com/v11.0/oauth/access_token?grant_type=fb_exchange_token&client_id=331680091973506&client_secret=3f776bc9dced8da8f209ab70723f4ffd&fb_exchange_token=' . $page_access_token);
        return ($response['access_token']);
    }