
const CONSTANTS = {
  iconsPrefix: 'fa',
  icons: {
    paginationSwitchDown: 'fa-caret-square-down',
    paginationSwitchUp: 'fa-caret-square-up',
    refresh: 'fa-sync',
    toggleOff: 'fa-toggle-off',
    toggleOn: 'fa-toggle-on',
    columns: 'fa-th-list',
    detailOpen: 'fa-plus',
    detailClose: 'fa-minus',
    fullscreen: 'fa-arrows-alt',
    search: 'fa-search',
    clearSearch: 'fa-trash'
  },
  classes: {
    buttonsPrefix: 'btn',
    buttons: 'secondary',
    buttonsGroup: 'btn-group',
    buttonsDropdown: 'btn-group',
    pull: 'float',
    inputGroup: 'btn-group',
    inputPrefix: 'form-control-',
    input: 'form-control',
    paginationDropdown: 'btn-group dropdown',
    dropup: 'dropup',
    dropdownActive: 'active',
    paginationActive: 'active',
    buttonActive: 'active'
  },
  html: {
    toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
    toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
    pageDropdown: ['<div class="dropdown-menu">', '</div>'],
    pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
    toolbarDropdownSeparator: '<div class="dropdown-divider"></div>',
    dropdownCaret: '<span class="caret"></span>',
    pagination: ['<ul class="pagination%s">', '</ul>'],
    paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
    icon: '<i class="%s %s"></i>',
    inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>',
    searchInput: '<input class="%s%s" type="text" placeholder="%s">',
    searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
    searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'
  }
};

const DEFAULTS = {
  height: undefined,
  classes: 'table table-bordered table-hover',
  buttons: {},
  theadClasses: '',
  headerStyle(column) {
    return {}
  },
  rowStyle(row, index) {
    return {}
  },
  rowAttributes(row, index) {
    return {}
  },
  undefinedText: '-',
  locale: undefined,
  virtualScroll: false,
  virtualScrollItemHeight: undefined,
  sortable: true,
  sortClass: undefined,
  silentSort: true,
  sortName: undefined,
  sortOrder: undefined,
  sortReset: false,
  sortStable: false,
  rememberOrder: false,
  serverSort: true,
  customSort: undefined,
  columns: [
    []
  ],
  data: [],
  url: undefined,
  method: 'get',
  cache: true,
  contentType: 'application/json',
  dataType: 'json',
  ajax: undefined,
  ajaxOptions: {},
  queryParams(params) {
    return params
  },
  queryParamsType: 'limit', // 'limit', undefined
  responseHandler(res) {
    return res
  },
  totalField: 'total',
  totalNotFilteredField: 'totalNotFiltered',
  dataField: 'rows',
  footerField: 'footer',
  pagination: false,
  paginationParts: ['pageInfo', 'pageSize', 'pageList'],
  showExtendedPagination: false,
  paginationLoop: true,
  sidePagination: 'client', // client or server
  totalRows: 0,
  totalNotFiltered: 0,
  pageNumber: 1,
  pageSize: 10,
  pageList: [10, 25, 50, 100],
  paginationHAlign: 'right', // right, left
  paginationVAlign: 'bottom', // bottom, top, both
  paginationDetailHAlign: 'left', // right, left
  paginationPreText: '&lsaquo;',
  paginationNextText: '&rsaquo;',
  paginationSuccessivelySize: 5, // Maximum successively number of pages in a row
  paginationPagesBySide: 1, // Number of pages on each side (right, left) of the current page.
  paginationUseIntermediate: false, // Calculate intermediate pages for quick access
  search: false,
  searchHighlight: false,
  searchOnEnterKey: false,
  strictSearch: false,
  searchSelector: false,
  visibleSearch: false,
  showButtonIcons: true,
  showButtonText: false,
  showSearchButton: false,
  showSearchClearButton: false,
  trimOnSearch: true,
  searchAlign: 'right',
  searchTimeOut: 500,
  searchText: '',
  customSearch: undefined,
  showHeader: true,
  showFooter: false,
  footerStyle(column) {
    return {}
  },
  searchAccentNeutralise: false,
  showColumns: false,
  showColumnsToggleAll: false,
  showColumnsSearch: false,
  minimumCountColumns: 1,
  showPaginationSwitch: false,
  showRefresh: false,
  showToggle: false,
  showFullscreen: false,
  smartDisplay: true,
  escape: false,
  filterOptions: {
    filterAlgorithm: 'and'
  },
  idField: undefined,
  selectItemName: 'btSelectItem',
  clickToSelect: false,
  ignoreClickToSelectOn({ tagName }) {
    return ['A', 'BUTTON'].includes(tagName)
  },
  singleSelect: false,
  checkboxHeader: true,
  maintainMetaData: false,
  multipleSelectRow: false,
  uniqueId: undefined,
  cardView: false,
  detailView: false,
  detailViewIcon: true,
  detailViewByClick: false,
  detailViewAlign: 'left',
  detailFormatter(index, row) {
    return ''
  },
  detailFilter(index, row) {
    return true
  },
  toolbar: undefined,
  toolbarAlign: 'left',
  buttonsToolbar: undefined,
  buttonsAlign: 'right',
  buttonsOrder: ['paginationSwitch', 'refresh', 'toggle', 'fullscreen', 'columns'],
  buttonsPrefix: CONSTANTS.classes.buttonsPrefix,
  buttonsClass: CONSTANTS.classes.buttons,
  icons: CONSTANTS.icons,
  iconSize: undefined,
  iconsPrefix: CONSTANTS.iconsPrefix, // glyphicon or fa(font-awesome)
  loadingFontSize: 'auto',
  loadingTemplate(loadingMessage) {
    return `<span class="loading-wrap">
      <span class="loading-text">${loadingMessage}</span>
      <span class="animation-wrap"><span class="animation-dot"></span></span>
      </span>
    `
  },
  onAll(name, args) {
    return false
  },
  onClickCell(field, value, row, $element) {
    return false
  },
  onDblClickCell(field, value, row, $element) {
    return false
  },
  onClickRow(item, $element) {
    return false
  },
  onDblClickRow(item, $element) {
    return false
  },
  onSort(name, order) {
    return false
  },
  onCheck(row) {
    return false
  },
  onUncheck(row) {
    return false
  },
  onCheckAll(rows) {
    return false
  },
  onUncheckAll(rows) {
    return false
  },
  onCheckSome(rows) {
    return false
  },
  onUncheckSome(rows) {
    return false
  },
  onLoadSuccess(data) {
    return false
  },
  onLoadError(status) {
    return false
  },
  onColumnSwitch(field, checked) {
    return false
  },
  onPageChange(number, size) {
    return false
  },
  onSearch(text) {
    return false
  },
  onToggle(cardView) {
    return false
  },
  onPreBody(data) {
    return false
  },
  onPostBody() {
    return false
  },
  onPostHeader() {
    return false
  },
  onPostFooter() {
    return false
  },
  onExpandRow(index, row, $detail) {
    return false
  },
  onCollapseRow(index, row) {
    return false
  },
  onRefreshOptions(options) {
    return false
  },
  onRefresh(params) {
    return false
  },
  onResetView() {
    return false
  },
  onScrollBody() {
    return false
  }
}

const COLUMN_DEFAULTS = {
  field: undefined,
  title: undefined,
  titleTooltip: undefined,
  class: undefined,
  width: undefined,
  widthUnit: 'px',
  rowspan: undefined,
  colspan: undefined,
  align: undefined, // left, right, center
  halign: undefined, // left, right, center
  falign: undefined, // left, right, center
  valign: undefined, // top, middle, bottom
  cellStyle: undefined,
  radio: false,
  checkbox: false,
  checkboxEnabled: true,
  clickToSelect: true,
  showSelectTitle: false,
  sortable: false,
  sortName: undefined,
  order: 'asc', // asc, desc
  sorter: undefined,
  visible: true,
  switchable: true,
  cardVisible: true,
  searchable: true,
  formatter: undefined,
  footerFormatter: undefined,
  detailFormatter: undefined,
  searchFormatter: true,
  searchHighlightFormatter: false,
  escape: false,
  events: undefined
}

const Constants = {
  CONSTANTS,

  DEFAULTS,

  COLUMN_DEFAULTS,
};

export default Constants;