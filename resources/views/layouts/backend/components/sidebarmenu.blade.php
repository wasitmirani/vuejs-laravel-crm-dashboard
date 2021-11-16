<div data-simplebar="" class="h-100">
@php
$sidebar=sideBarMenu();

@endphp
    <!--- Sidemenu -->
    <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
            @foreach ($sidebar as $menu)
            @if(!empty($menu['heading']))
            <li class="menu-title" data-key="t-menu">{{$menu['heading']}}</li>
            @endif
            {{-- <li class="menu-title" data-key="t-apps">Apps</li> --}}
            @if(!empty($menu['menu']))
            <li>
                <a href="javascript: void(0);" class="has-arrow">
                    <i data-feather="{{$menu['menu']['icon']}}"></i>
                    <span data-key="t-ecommerce">{{$menu['menu']['title']}}</span>
                </a>

                <ul class="sub-menu" aria-expanded="false">
                  @foreach ($menu['menu']['sub_menu'] as $item)
                  <li @if(isset($item['v-can'])) v-can="'{{$item['v-can']}}'" @endif>
                    {{-- <a href="ecommerce-products.html" key="t-products">Products</a> --}}
                    <router-link to="{{$item['v-route']}}" key="t-{{$item['title']}}" >{{$item['title']}}</router-link>
                </li>
                @endforeach



              </ul>
            </li>
          @endif
          @if(!empty($menu['single_link']))
          <li>
            <router-link to="{{$menu['single_link']['v-route']}}">
                <i data-feather="{{$menu['single_link']['icon']}}"></i>
                {{-- <span class="badge rounded-pill bg-soft-warning text-warning float-end">9+</span> --}}
                <span data-key="t-{{$menu['single_link']['title']}}">{{$menu['single_link']['title']}}</span>
            </router-link>
        </li>
          {{-- <li @if(isset($item['v-can'])) v-can="'{{$item['v-can']}}'" @endif>
            <router-link to="{{$menu['single_link']['v-route']}}">
                <i data-feather="{{$menu['single_link']['icon']}}"></i>
                <span class="badge rounded-pill bg-soft-warning text-warning float-end">9+</span>
                <span data-key="t-{{$menu['single_link']['title']}}">{{$menu['single_link']['title']}}</span>

            </router-link>
        </li> --}}

          @endif
          @endforeach


        </ul>
    </div>
</div>
