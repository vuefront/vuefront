<template>
  <vf-m-row>
    <vf-m-col xs="12" md="6">
      <vf-l-m-product-image />
      <vf-l-o-review-list />
      <vf-l-o-review-form />
    </vf-m-col>
    <vf-m-col xs="12" md="6">
      <div class="product-info pl-lg-5">
        <vf-m-skeleton
          width="30%"
          height="31px"
          style="margin-bottom: 0.5rem"
        ></vf-m-skeleton>
        <vf-m-skeleton
          width="20%"
          height="18px"
          style="margin-bottom: 0.5rem"
        ></vf-m-skeleton>
        <vf-m-row>
          <vf-m-col xs="6"></vf-m-col>
          <vf-m-col xs="6" class="sm:text-right">
            <vf-m-skeleton
              width="65px"
              height="20px"
              class="d-inline-block"
            ></vf-m-skeleton>
            <vf-m-skeleton
              width="65px"
              height="20px"
              class="d-inline-block"
            ></vf-m-skeleton>
          </vf-m-col>
        </vf-m-row>
        <div class="my-4 py-4 border-top">
          <vf-m-skeleton width="30%" height="15px" class="mb-2"></vf-m-skeleton>

          <vf-m-skeleton
            height="13px"
            style="margin-bottom: 10px"
          ></vf-m-skeleton>
          <vf-m-skeleton
            height="13px"
            style="margin-bottom: 10px"
          ></vf-m-skeleton>
          <vf-m-skeleton
            height="13px"
            style="margin-bottom: 10px"
          ></vf-m-skeleton>
          <vf-m-skeleton
            height="13px"
            style="margin-bottom: 10px"
          ></vf-m-skeleton>
          <vf-m-skeleton
            width="60%"
            height="13px"
            style="margin-bottom: 35px"
          ></vf-m-skeleton>
          <vf-m-skeleton
            height="13px"
            style="margin-bottom: 10px"
          ></vf-m-skeleton>
          <vf-m-skeleton
            height="13px"
            style="margin-bottom: 10px"
          ></vf-m-skeleton>
          <vf-m-skeleton
            height="13px"
            style="margin-bottom: 10px"
          ></vf-m-skeleton>
          <vf-m-skeleton
            height="13px"
            style="margin-bottom: 10px"
          ></vf-m-skeleton>
        </div>
        <div class="py-4 my-4 border-bottom border-top">
          <vf-m-row>
            <vf-m-col xs="6" md="5" class="mb-4 mb-sm-0">
              <div class="product-info__price h3">
                <vf-m-skeleton width="110px" height="37px"></vf-m-skeleton>
              </div>
            </vf-m-col>
            <vf-m-col xs="6" md="7" class="sm:text-right">
              <vf-m-skeleton
                width="165px"
                height="50px"
                class="ml-auto"
              ></vf-m-skeleton>
            </vf-m-col>
          </vf-m-row>
        </div>
      </div>
    </vf-m-col>
  </vf-m-row>
</template>
