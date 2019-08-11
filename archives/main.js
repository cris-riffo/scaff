// Adding Classes
$(
  "#shipping_address_country select, #shipping_address_region select, #billing_address_country select, #billing_address_region select"
).addClass("form-control");
$(
  "#estimate_shipping_button, #set_shipping_button, #set_coupon_code_button"
).addClass("butn");
$(".actions .button").addClass("butn");
$("#checkout .actions .button").addClass("butn blue");
$(".checkbox-field").addClass("checkbox");
$(
  "#contacts .textarea, #shipping_address .textarea, #other .textarea, #billing_address .textarea, #contacts .select, #shipping_address .select, #other .select, #billing_address .select, #customer_password, #customer_password_confirmation, .text-field input, #contact_email, #contact_name, #contact_message, #contact_phone, #coupon_code, #customer_email, #customer_phone, #customer_shipping_address_name, #customer_shipping_address_surname, #customer_shipping_address_address, #customer_shipping_address_taxid, #customer_shipping_address_postal, #customer_shipping_address_city, #customer_billing_address_name, #customer_billing_address_surname, #customer_billing_address_address, #customer_billing_address_taxid, #customer_billing_address_postal, #customer_billing_address_city,#estimate_shipping_form select,#estimate_shipping_form input"
).addClass("form-control");

$(
  "#shipping_address div.col-sm-12 input,#shipping_address div.col-sm-12 select,#billing_address div.col-sm-12 input,#billing_address div.col-sm-12 select,#billing_address div.col-sm-12 textarea,#customer_additional_fields input,#customer_additional_fields select,#customer_additional_fields textarea"
).addClass("form-control");
$(".field label").addClass("control-label");

// Pagination
$(".pager").addClass("pagination justify-content-center");
$(".pagination li").addClass("page-item");
$(".pagination li a").addClass("page-link");
$(".pagination").removeClass("pager");
$(".pagination").wrapAll("<nav>");

// Customer
$("#credentials_email").wrapAll('<div class="form-group">');
//$("#shipping_address, #customer_address #billing_address,#customer_address .actions").wrapAll('<div class="block"><div class="block-inside">')
$(
  "#customer_details #customer_contacts, #customer_details #customer_additional_fields, #customer_details #customer_details_password, #customer_details .actions"
).wrapAll('<div class="block"><div class="block-inside">');

// Contact Page
$("#contactpage .actions .button").addClass("btn-block");
$("#contactpage_email").wrapAll('<div class="form-group">');
$("#contactpage_name").wrapAll('<div class="form-group">');
$("#contactpage_phone").wrapAll('<div class="form-group">');
$("#contactpage_message").wrapAll('<div class="form-group">');

//Blog post
$(".blog-post iframe").wrapAll('<div class="videoWrapper">');
$(".page-body table").addClass("table table-bordered");

// Cart
$("#coupon_code").wrapAll('<div class="form-group">');
$(
  "#estimate_shipping_form > label:nth-child(1), #estimate_shipping_country"
).wrapAll('<div class="form-group arrow">');
$(
  "#estimate_shipping_form > label:nth-child(2), #estimate_shipping_region"
).wrapAll('<div class="form-group arrow">');
$(
  "#estimate_shipping_form > label:nth-child(3), #estimate_shipping_municipality"
).wrapAll('<div class="form-group arrow">');
$(
  "#estimate_shipping_form > label:nth-child(4), #estimate_shipping_postal"
).wrapAll('<div class="form-group">');
$("#estimate_shipping_form #estimate_shipping_country").wrapAll(
  '<div class="select">'
);
$("#estimate_shipping_form #estimate_shipping_region").wrapAll(
  '<div class="select">'
);
$("#estimate_shipping_form #estimate_shipping_municipality").wrapAll(
  '<div class="select">'
);
$("#estimate_shipping_form .arrow .select, .cart .select-field").append(
  '<i class="fa fa-angle-down" aria-hidden="true"></i>'
);
$("#estimate_shipping #shipping_address_comuna").addClass("form-group");

// Checkout
$(
  "#checkout #contacts, #checkout #shipping_address, #checkout #billing_address, #checkout #other, #checkout .required,#payments, #shipping, #checkout .actions"
).wrapAll('<div class="col-12 table">');
$(
  "#checkout #contacts h2.legend, #checkout #shipping_address h2.legend, #checkout #billing_address h2.legend, #checkout #other h2.legend"
).addClass("col-md-12 col-12");

$("#checkout #payments, #checkout #shipping").wrapAll('<div class="row">');
$("#checkout .col-lg-8, #checkout .col-lg-4").wrapAll('<div class="row">');
$("#checkout p.required").wrapAll('<div class="row"><div class="col-12">');
$("#contacts, #shipping_address,#billing_address, #other").addClass("row");
$(
  "#contacts .field, #shipping_address .field, #billing_address .field, #other .field"
).addClass("col-md-6 col-12");
$("#other_additional_information").removeClass("col-md-6 col-sm-6 ");
$("#other_additional_information").addClass("col-md-12 col-sm-12");
$("#payments, #shipping").addClass("col-lg-6 col-md-6 col-12");
$("#checkout .checkbox-field").addClass("no-label");

$("#checkout .field,#estimate_shipping_address_comuna").addClass("form-group");

// Success
$("#credentials_password").wrapAll('<div class="form-group">');
$("#credentials_password_confirmation").wrapAll('<div class="form-group">');

// Customer
$("#customer_details #contacts_email").wrapAll('<div class="form-group">');
$("#customer_details #contacts_phone").wrapAll('<div class="form-group">');
$("#customer_details #details_password").wrapAll('<div class="form-group">');
$("#customer_details #details_confirm_password").wrapAll(
  '<div class="form-group">'
);
$(".pending-payment").addClass("badge badge-warning mt-2");
$(".paid").addClass("badge badge-success");
$(".abandoned").addClass("badge badge-default");
$(".canceled").addClass("badge badge-danger");
$(".shipped").addClass("badge badge-primary");
$(
  "#address #shipping_address_name, #address #shipping_address_surname, #address #shipping_address_address, #address #shipping_address_taxid, #address #shipping_address_city, #address #shipping_address_postal, #address #shipping_address_country, #address #shipping_address_region, #address #billing_address_name, #address #billing_address_surname, #address #billing_address_address,#address #billing_address_taxid, #address #billing_address_city, #address #billing_address_postal, #address #billing_address_country, #address #billing_address_region,#customer_details_password > div"
).addClass("form-group ");

$(
  "#shipping_address div.col-sm-12,#billing_address div.col-sm-12,#customer_additional_fields > div"
).addClass("field col-md-6 col-12 form-group");

$("ul.nav > li.dropdown > ul > li").click(function(event) {
  // stop bootstrap.js to hide the parents
  event.stopPropagation();
  // hide the open children
  $(this)
    .find("ul.nav > li.dropdown > ul > li")
    .removeClass("open");
  // add 'open' class to all parents with class 'dropdown-submenu'
  $(this)
    .parents("ul.nav > li.dropdown > ul > li")
    .addClass("open");
  // this is also open (or was)
  $(this).toggleClass("open");
});

// -------------------- MULTI-CURRENCY --------------------

// apply currency changes on HTML
function changeCurrency(fromProductPage) {
  try {
    // set currencies
    old_currency = sessionStorage.getItem("store_currency");
    new_currency = $.trim(sessionStorage.getItem("global_currency"));

    // current currency on nav-bar
    $("#current_currency, #current_currency_mobile").text(new_currency);

    // cart total on nav-bar
    if (!fromProductPage) {
      cart_products = $("#nav-bar-cart")
        .text()
        .split("|")[0];
      nav_bar_cart_amount = $("#nav-bar-cart")
        .text()
        .split("|")[1];
      nav_bar_cart_amount = accounting.formatMoney(
        fx.convert(
          accounting.unformat(nav_bar_cart_amount, i18n_decimal_mark),
          { from: old_currency, to: new_currency }
        ),
        { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
      );
      $("#nav-bar-cart").text(cart_products + "| " + nav_bar_cart_amount);
    }

    // homepage product blocks
    $(".product-block-normal").each(function() {
      amount = accounting.unformat($(this).text(), i18n_decimal_mark);
      $(this).text(
        accounting.formatMoney(
          fx.convert(amount, { from: old_currency, to: new_currency }),
          { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
        )
      );
    });
    $(".product-block-list").each(function() {
      amount = accounting.unformat($(this).text(), i18n_decimal_mark);
      $(this).text(
        accounting.formatMoney(
          fx.convert(amount, { from: old_currency, to: new_currency }),
          { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
        )
      );
    });
    // discounts
    $(".product-block-discount").each(function() {
      amount = accounting.unformat($(this).text(), i18n_decimal_mark);
      $(this).text(
        accounting.formatMoney(
          fx.convert(amount, { from: old_currency, to: new_currency }),
          { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
        )
      );
    });

    // product page price
    if (
      $("#product-form-price-2").siblings().length == 0 &&
      $(".product-form-discount-2").length == 0
    ) {
      product_amount = accounting.unformat(
        $("#product-form-price-2").text(),
        i18n_decimal_mark
      );
      $("#product-form-price-2").text(
        accounting.formatMoney(
          fx.convert(product_amount, { from: old_currency, to: new_currency }),
          { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
        )
      );

      product_amount = accounting.unformat(
        $("#product-form-price").text(),
        i18n_decimal_mark
      );
      $("#product-form-price").text(
        accounting.formatMoney(
          fx.convert(product_amount, { from: old_currency, to: new_currency }),
          { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
        )
      );
    } else {
      product_amount = Math.abs(
        accounting.unformat(
          $("#product-form-price-2").text(),
          i18n_decimal_mark
        )
      );
      $("#product-form-price-2").text(
        accounting.formatMoney(
          fx.convert(product_amount, { from: old_currency, to: new_currency }),
          { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
        )
      );

      discount_amount = Math.abs(
        accounting.unformat(
          $(".product-form-discount").text(),
          i18n_decimal_mark
        )
      );
      $(".product-form-discount").text(
        accounting.formatMoney(
          fx.convert(discount_amount, { from: old_currency, to: new_currency }),
          { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
        )
      );
    }

    // cart/revieworder unit price & customer details price
    $(".order-product-price").each(function() {
      amount = accounting.unformat($(this).text(), i18n_decimal_mark);
      $(this).text(
        accounting.formatMoney(
          fx.convert(amount, { from: old_currency, to: new_currency }),
          { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
        )
      );
    });

    $(".cart-product-discount")
      .children()
      .each(function() {
        discounted_amount = Math.abs(
          accounting.unformat(
            $(this)
              .contents()
              .get(0).nodeValue,
            i18n_decimal_mark
          )
        );
        $(this)
          .contents()
          .get(0).nodeValue = accounting.formatMoney(
          fx.convert(discounted_amount, {
            from: old_currency,
            to: new_currency
          }),
          { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
        );

        orig_amount = Math.abs(
          accounting.unformat(
            $(this)
              .children()
              .text(),
            i18n_decimal_mark
          )
        );
        $(this)
          .children()
          .text(
            accounting.formatMoney(
              fx.convert(orig_amount, { from: old_currency, to: new_currency }),
              { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
            )
          );
      });

    // cart/revieworder unit & customer details order subtotal
    $(
      ".order-product-subtotal > .prod-value, .order-product-subtotal.cart-value, .order-product-subtotal.confirm-value"
    ).each(function() {
      amount = accounting.unformat($(this).text(), i18n_decimal_mark);
      $(this).text(
        accounting.formatMoney(
          fx.convert(amount, { from: old_currency, to: new_currency }),
          { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
        )
      );
    });

    //cart/revieworder total
    cart_total = accounting.unformat(
      $(".totals")
        .children(".text-right")
        .children("strong")
        .text(),
      i18n_decimal_mark
    );
    $(".totals")
      .children(".text-right")
      .children("strong")
      .text(
        accounting.formatMoney(
          fx.convert(cart_total, { from: old_currency, to: new_currency }),
          { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
        )
      );

    //revieworder subtotal/shipping/taxes
    $(".totals")
      .children(".text-right:not(:last)")
      .each(function() {
        amount = accounting.unformat($(this).text(), i18n_decimal_mark);
        $(this).text(
          accounting.formatMoney(
            fx.convert(amount, { from: old_currency, to: new_currency }),
            { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
          )
        );
      });

    $(".totals.checkout")
      .children(".text-right")
      .each(function() {
        amount = accounting.unformat($(this).text(), i18n_decimal_mark);
        $(this).text(
          accounting.formatMoney(
            fx.convert(amount, { from: old_currency, to: new_currency }),
            { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
          )
        );
      });

    // estimate shipping list
    $("#estimates")
      .find("dd")
      .each(function() {
        if ($(this).text() != "Error") {
          // for Correios Brasil
          item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
          $(this).text(
            accounting.formatMoney(
              fx.convert(item_amount, { from: old_currency, to: new_currency }),
              { symbol: { EUR: "€", GBP: "₤" }[new_currency] }
            )
          );
        }
      });
  } catch (e) {
    // log conversion errors, proceed with callback
    if (e == "fx error") {
      console.log(e);
      return;
    }
  }
}

$(document).ready(function() {
  if (typeof open_exchange_rates_token !== "undefined") {
    Jumpseller.multiCurrency({
      token: open_exchange_rates_token,
      callback: changeCurrency
    });
  }
});

$(document).ready(function() {
  $("#input-qty").on("keyup", function() {
    var $qty = $("#input-qty");
    var $adc = $(".adc");
    verifyQuantity($qty, $adc);
  });
});
$(document).ready(function() {
  $(
    "#navbarsContainer .nav-item.dropdown, #navbarsContainer .dropdown-menu.multi-level"
  ).hover(function() {
    $(this).toggleClass("sfhover");
  });
});

// -------------------- MAx Variant Quantity --------------
function verifyQuantity($qty, $adc) {
  if (parseInt($qty.val()) > parseInt($qty.attr("max"))) {
    $qty.addClass("maxStockQty");
    $adc.addClass("maxStockAdc");
  } else {
    $qty.removeClass("maxStockQty");
    $adc.removeClass("maxStockAdc");
  }
}

// --- Menu Mobile -- //
$(document).ready(function() {
  $(".menu-header .item-1 i").click(function() {
    $(".menu-header .item-1").toggleClass("active");
    $(".menu-header .item-2, .menu-header .item-3").removeClass("active");
  });
  $(".menu-header .item-2 span").click(function() {
    $(".menu-header .item-2").toggleClass("active");
    $(".menu-header .item-1, .menu-header .item-3").removeClass("active");
  });
  $(".menu-header .item-3 span").click(function() {
    $(".menu-header .item-3").toggleClass("active");
    $(".menu-header .item-1, .menu-header .item-2").removeClass("active");
  });

  // mobile menu
  $(".menu-mobile li.has-dropdown a.first-trigger").click(function() {
    $(".menu-mobile").toggleClass("active");
    $(this)
      .next()
      .toggleClass("active");
  });

  // mobile menu - N levels down
  $(".menu-mobile li.has-dropdown a.last-trigger").click(function() {
    $(".menu-mobile").toggleClass(
      $(this)
        .attr("class")
        .split(" ")
        .shift()
        .toString()
    );
    $(this)
      .next()
      .addClass("active");
  });

  // back button on mobile menu
  $(".menu-mobile li.has-dropdown a.back-level-1").click(function() {
    $(".menu-mobile, ul.dropdown").removeClass("active");
  });

  // back button on mobile menu - N levels up
  $(".menu-mobile li.has-dropdown a[class^='back-level-']").click(function() {
    classesArray = $(this)
      .attr("class")
      .split("-");
    classesArray.shift();

    $(".menu-mobile").toggleClass(classesArray.join("-"));
    $("ul." + classesArray.join("-").toString() + ".dropdown").removeClass(
      "active"
    );
  });

  $(".nav-icon").click(function() {
    $(this).toggleClass("open");
    $(".mobilenav").toggleClass("open");
    $("body").toggleClass("menuopen");
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() >= 200) {
    $("#navbar").addClass("sticky");
  } else {
    $("#navbar").removeClass("sticky");
  }
});
