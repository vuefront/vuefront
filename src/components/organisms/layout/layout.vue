<style lang="scss">
.main-content {
  padding-top: 65px;
  min-height: 600px;
}
</style><template>
  <div>
    <vf-o-header />
    <vf-o-header-mobile />
    <vf-o-notification />
    <vf-m-container>
      <div class="main-content">
        <vf-o-position name="contentTop" class="py-3" />
        <vf-m-row>
          <vf-m-col v-if="checkModules('columnLeft')" sm="3" class="d-none d-md-block">
            <vf-o-position name="columnLeft" class="px-2" />
          </vf-m-col>
          <vf-m-col :sm="contentWidth">
            <vf-o-position name="columnCenterTop" />
            <slot></slot>
            <vf-o-position name="columnCenterBottom" />
          </vf-m-col>
          <vf-m-col v-if="checkModules('columnRight')" sm="3" class="d-none d-md-block">
            <vf-o-position name="columnRight" class="px-2" />
          </vf-m-col>
        </vf-m-row>
        <vf-o-position name="contentBottom" class="py-3" />
      </div>
    </vf-m-container>
    <vf-o-footer />
  </div>
</template>
<script>
import { BaseModule } from "vuefront/lib/utils/module.js";

export default {
  mixins: [BaseModule],
  computed: {
    contentWidth() {
      let result = 12;
      if (this.checkModules("columnLeft") && this.checkModules("columnRight")) {
        result = 6;
      } else if (
        this.checkModules("columnLeft") ||
        this.checkModules("columnRight")
      ) {
        result = 9;
      }
      return result;
    }
  }
};
</script>
<style lang="scss">
.main-content {
  padding-top: 65px;
  min-height: 600px;
}
</style>