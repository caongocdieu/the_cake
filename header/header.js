function header() {
    return `        <div class="header">
    <div class="grid wide">
        <!-- Header -->
        <div class="header__navbar">
            <div class="header__wrap-left">
                <div class="header__icon">
                    <img src="assets/img/icon.webp" alt="">
                </div>
                <!-- Header Menu -->
                <ul class="header__content-list">

                    <li class="header__content-item">
                        <a href="" class="header__content-item-link">
                            Home
                        </a>
                    </li>
                    <li class="header__content-item">
                        <a href="" class="header__content-item-link">
                            Product
                        </a>
                    </li>
                    <li class="header__content-item">
                        <a href="" class="header__content-item-link">
                            About
                        </a>
                    </li>
                    <li class="header__content-item">
                        <a href="" class="header__content-item-link">
                            Blog
                        </a>
                        <ul class="sub__header-list">
                            <li class="sub__header-item">
                                <a href="" class="sub__header-item-link">Blog</a>
                            </li>
                            <li class="sub__header-item">
                                <a href="" class="sub__header-item-link">Blog Details</a>
                            </li>
                            <li class="sub__header-item">
                                <a href="" class="sub__header-item-link">Element</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- Header user -->
            <div class="header__wrap-right">
                <!-- Header Search -->
                <label class="header__search-mobile-icon fas fa-search"for="header__search-check"></label>
                <input type="checkbox" name="" hidden id="header__search-check">
                <div class="header__search">
                    <div class="header__search-input-wrap">
                        <input type="text" class="header__search-input" placeholder="Search">
                        <div class="header__search-incon-wrap">
                            <i class="header__search-icon fas fa-search"></i>
                        </div>
                        <ul class="header__search-history">
                            <li class="header__search-history-item">
                                <a href="" class="header__search-history-item-link">
                                    Bánh Pudding Phô mai gồm những thành rất thơm ngon và bổ dưỡng :D 
                                </a>
                                <i class="header__search-history-icon far fa-times-circle"></i>
                            </li>
                            <li class="header__search-history-item">
                                <a href="" class="header__search-history-item-link">
                                    Bánh Pudding Phô mai 
                                </a>
                                <i class="header__search-history-icon far fa-times-circle"></i>
                            </li>
                            <li class="header__search-history-item">
                                <a href="" class="header__search-history-item-link">
                                    Bánh Pudding Phô mai 
                                </a>
                                <i class="header__search-history-icon far fa-times-circle"></i>
                            </li>
                            <li class="header__search-history-item">
                                <a href="" class="header__search-history-item-link">
                                    Bánh Pudding Phô mai 
                                </a>
                                <i class="header__search-history-icon far fa-times-circle"></i>
                            </li>
                            <li class="header__search-history-item">
                                <a href="" class="header__search-history-item-link">
                                    Bánh Pudding Phô mai 
                                </a>
                                <i class="header__search-history-icon far fa-times-circle"></i>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div class="header__login ">
                    <i class="header__login-icon fas fa-user"></i>
                    <a href="" class="header__login-link">Login</a>
                </div>
                <div class="header__user user-login">
                    <div class="header__user-info">
                        <img src="/assets/img/avartar.jpg" alt="" class="header__user-img">
                    </div>
                    <span class="header__user-info-number">
                        Cao Ngọc Diệu
                    </span>
                    <label class="header__user-info-down fas fa-sort-down" for="header__user-info-list-check"></label>
                    <input type="checkbox" name="" id="header__user-info-list-check"  hidden >
                    <ul class="header__user-info-list">
                        <li class="header__user-info-item">
                            <i class="header__user-info-item-icon fas fa-info-circle"></i>
                            <a href="" class="header__user-info-item-link">
                                User info
                            </a>
                        </li>
                        <li class="header__user-info-item">
                            <i class="header__user-info-item-icon fas fa-sign-out-alt"></i>
                            <a href="" class="header__user-info-item-link">
                                Log out
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- Header Cart -->
                <div class="header__order">
                    <label class="header__order-icon fas fa-shopping-cart" for="header__cart-list-checkbox"></label>
                    <input type="checkbox" name="" hidden id="header__cart-list-checkbox">
                    <label for="header__cart-list-checkbox" class="header__cart-overplay"></label>
                    <div class="header__cart">
                        <div class="header__cart-top">
                            <h2 class="header__cart-label">RECENTLY ADDED ITEMS</h2>
                        </div>
                        <div class="header__cart-body">
                            <div class="header__cart-empty cart-empty">
                                <img src="assets/img/empty_cartpng.png" alt="" class="header__cart-empty-img">
                            </div>                                    
                            <div class="header__cart-list">
                                <div class="header__cart-item-wrap">
                                    <div class="header__cart-item">
                                        <img src="assets/img/item1.webp" alt="" class="header__cart-item-img">
                                        <div class="header__cart-content">
                                            <div class="header__cart-content-top">
                                                <h2 class="header__cart-content-header">SweetHeart</h2>
                                                <h2 class="header__cart-price">$129.00</h2>
                                                <h2 class="header__cart-old-headerprice">$129.00</h2>
                                            </div>
                                            <div class="header__cart-content-bottom">
                                                <span class="header__cart-content-msg">Qty:</span>
                                                <input type="number" class="header__cart-content-qty" value="1">
                                                <button class="header__cart-content-btn-edit">
                                                    <i class="header__cart-content-btn-edit-icon fas fa-pencil-alt"></i>
                                                </button>
                                                <button class="header__cart-content-btn-remove">
                                                    <i class="header__cart-content-btn-remove-icon far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="header__cart-item">
                                        <img src="assets/img/item1.webp" alt="" class="header__cart-item-img">
                                        <div class="header__cart-content">
                                            <div class="header__cart-content-top">
                                                <h2 class="header__cart-content-header">SweetHeart</h2>
                                                <h2 class="header__cart-price">$129.00</h2>
                                                <h2 class="header__cart-old-headerprice">$129.00</h2>
                                            </div>
                                            <div class="header__cart-content-bottom">
                                                <span class="header__cart-content-msg">Qty:</span>
                                                <input type="number" class="header__cart-content-qty" value="1">
                                                <button class="header__cart-content-btn-edit">
                                                    <i class="header__cart-content-btn-edit-icon fas fa-pencil-alt"></i>
                                                </button>
                                                <button class="header__cart-content-btn-remove">
                                                    <i class="header__cart-content-btn-remove-icon far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="header__cart-item">
                                        <img src="assets/img/item1.webp" alt="" class="header__cart-item-img">
                                        <div class="header__cart-content">
                                            <div class="header__cart-content-top">
                                                <h2 class="header__cart-content-header">SweetHeart</h2>
                                                <h2 class="header__cart-price">$129.00</h2>
                                                <h2 class="header__cart-old-headerprice">$129.00</h2>
                                            </div>
                                            <div class="header__cart-content-bottom">
                                                <span class="header__cart-content-msg">Qty:</span>
                                                <input type="number" class="header__cart-content-qty" value="1">
                                                <button class="header__cart-content-btn-edit">
                                                    <i class="header__cart-content-btn-edit-icon fas fa-pencil-alt"></i>
                                                </button>
                                                <button class="header__cart-content-btn-remove">
                                                    <i class="header__cart-content-btn-remove-icon far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="header__cart-item">
                                        <img src="assets/img/item1.webp" alt="" class="header__cart-item-img">
                                        <div class="header__cart-content">
                                            <div class="header__cart-content-top">
                                                <h2 class="header__cart-content-header">SweetHeart</h2>
                                                <h2 class="header__cart-price">$129.00</h2>
                                                <h2 class="header__cart-old-headerprice">$129.00</h2>
                                            </div>
                                            <div class="header__cart-content-bottom">
                                                <span class="header__cart-content-msg">Qty:</span>
                                                <input type="number" class="header__cart-content-qty" value="1">
                                                <button class="header__cart-content-btn-edit">
                                                    <i class="header__cart-content-btn-edit-icon fas fa-pencil-alt"></i>
                                                </button>
                                                <button class="header__cart-content-btn-remove">
                                                    <i class="header__cart-content-btn-remove-icon far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="header__cart-item">
                                        <img src="assets/img/item1.webp" alt="" class="header__cart-item-img">
                                        <div class="header__cart-content">
                                            <div class="header__cart-content-top">
                                                <h2 class="header__cart-content-header">SweetHeart</h2>
                                                <h2 class="header__cart-price">$129.00</h2>
                                                <h2 class="header__cart-old-headerprice">$129.00</h2>
                                            </div>
                                            <div class="header__cart-content-bottom">
                                                <span class="header__cart-content-msg">Qty:</span>
                                                <input type="number" class="header__cart-content-qty" value="1">
                                                <button class="header__cart-content-btn-edit">
                                                    <i class="header__cart-content-btn-edit-icon fas fa-pencil-alt"></i>
                                                </button>
                                                <button class="header__cart-content-btn-remove">
                                                    <i class="header__cart-content-btn-remove-icon far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="header__cart-total">
                                    <div class="header__cart-total-left">
                                        <h2 class="header__cart-total-content">TOTAL:</h2>
                                        <h2 class="header__cart-total-price">$129.00</h2>
                                    </div>
                                    <div class="header__cart-total-right">
                                        <button class="btn header__cart-total-viewcart">VIEW CART</button>
                                        <button class="btn header__cart-total-checkout">CHECKOUT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Header menu reponsive -->
                <div class="header__menu-btn">
                    <label class="header__menu-btn-icon fas fa-bars" for="header__menu-mobile-check"></label>
                </div>
                <!-- <label for="header__menu-mobile-check">Cao ngọc diệu</label> -->
                <input type="checkbox" name="" hidden id="header__menu-mobile-check">
                <label class="header__menu-overplay" for="header__menu-mobile-check"></label>
                <div class="header__menu-mobile">
                    <div class="header__menu-mobile-top">
                        <div class="header__login-mobile user-login">
                            <i class="header__login-icon fas fa-user"></i>
                            <a href="" class="header__login-link">Login</a>
                        </div>
                        <div class="header__user-mobile">
                            <div class="header__user-info">
                                <img src="/assets/img/avartar.jpg" alt="" class="header__user-mobile-img">
                            </div>
                            <span class="header__user-info-number font-wei-900 ">
                                Cao Ngọc Diệu
                            </span>
                        </div>

                        <label class="header__close-icon fas fa-times" for="header__menu-mobile-check"></label>
                    </div>
                    <ul class="header__mobile-list">
                        <li class="header__mobile-item">
                            <i class="header__mobile-item-icon fas fa-home"></i>
                            <a href="" class="header__mobile-item-link">
                                Home
                            </a>
                        </li>
                        <li class="header__mobile-item">
                            <i class="header__mobile-item-icon fas fa-info-circle"></i>
                            <a href="" class="header__mobile-item-link">
                                User info
                            </a>
                        </li>   
                        <li class="header__mobile-item">
                            <i class="header__mobile-item-icon fab fa-product-hunt"></i>
                            <a href="" class="header__mobile-item-link">
                                Product
                            </a>
                        </li>
                        <li class="header__mobile-item">
                            <i class="header__mobile-item-icon fas fa-address-card"></i>
                            <a href="" class="header__mobile-item-link">
                                About
                            </a>
                        </li>
                        <li class="header__mobile-item">
                            <i class="header__mobile-item-icon fas fa-sign-out-alt"></i>
                            <a href="" class="header__mobile-item-link">
                                Log out
                            </a>
                            <!-- <ul class="sub__header-list">
                                <li class="sub__header-item">
                                    <a href="" class="sub__header-item-link">Blog</a>
                                </li>
                                <li class="sub__header-item">
                                    <a href="" class="sub__header-item-link">Blog Details</a>
                                </li>
                                <li class="sub__header-item">
                                    <a href="" class="sub__header-item-link">Element</a>
                                </li>
                            </ul> -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>`
}

export default header;