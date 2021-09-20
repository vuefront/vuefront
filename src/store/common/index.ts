import { State as AddressState } from "./address/address";
import { State as ApolloState } from "./apollo/apollo";
import { State as BreadcrumbsState } from "./breadcrumbs/breadcrumbs";
import { State as ContactState } from "./contact/contact";
import { State as CountryState } from "./country/country";
import { State as CustomerState } from "./customer/customer";
import { State as LanguageState } from "./language/language";
import { State as MenuState } from "./menu/menu";
import { State as NotificationState } from "./notification/notification";
import { State as PageState } from "./page/page";
import { State as PositionState } from "./position/position";
import { State as VuefrontState } from "./vuefront/vuefront";
import { State as ZoneState } from "./zone/zone";
export type CommonState = {
  address: AddressState;
  breadcrumbs: BreadcrumbsState;
  contact: ContactState;
  country: CountryState;
  customer: CustomerState;
  language: LanguageState;
  page: PageState;
  zone: ZoneState;
  menu: MenuState;
};

export type CommonRootState = {
  apollo: ApolloState;
  notification: NotificationState;
  position: PositionState;
  vuefront: VuefrontState;
};
