<?php

namespace App\Helpers;

class HelperComponent
{

    public static function SideBar()
    {
        return [
            [
                "heading" => "Menu",
            ],
            [
                "single_link" => setSingleLink("dashboard", "home", "dashboard-view", "/"),
            ],
            [
                "heading" => "Management",

            ],

            [

                "menu" => [
                    "title" => 'User Management',
                    'can'=>'user-management-view',
                    "icon" => "user",
                    "sub_menu" => [
                        setSubMenu(
                            "Users",
                            null,
                            "users-view",
                            "/users",
                        ),
                        setSubMenu(
                            "Roles",
                            null,
                            "roles-view",
                            "/roles",
                        ),
                        setSubMenu(
                            "Permissions",
                            null,
                            "permissions-view",
                            "/permissions",
                        ),

                    ]

                ],

            ],

            [
                "heading" => "Apps",
            ],


            [

                "menu" => [
                    "title" => 'Container',
                    'can'=>'container-view',
                    "icon" => "box",
                    "sub_menu" => [
                        setSubMenu(
                            "Receive",
                            null,
                            "receive-view",
                            "/container/receives",
                        ),
                        setSubMenu(
                            "Stuffing",
                            null,
                            "stuffing-view",
                            "/container/stuffing",
                        ),
                        setSubMenu(
                            "Dispatch",
                             null,
                            "dispatch-view",
                            "/container/dispatch",
                        ),

                    ]

                ],

            ],
            [
                "single_link" => setSingleLink("Receipt Pallet GRN", "link", "services-view", "/logout"),
            ],

            [
                "heading" => "Tool",
            ],
            [

                "menu" => [
                    "title" => 'Settings',
                    'can'=>'settings-view',
                    "icon" => "settings",
                    "sub_menu" => [
                        setSubMenu(
                            "Profile",
                            null,
                            "profile-view",
                            "/profile",
                        ),
                        setSubMenu(
                            "Lock Screen",
                            null,
                            "lockscreen-view",
                            "/lock-screen",
                        ),



                    ]

                ],

            ],

            [
                "heading" => "Session",
            ],
            [
                "single_link" => setSingleLink("Log out", "log-out", "services-view", "/logout"),
            ],


        ];
    }
}
