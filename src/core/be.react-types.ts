const HTMLAttributesPropsName = {
    defaultChecked: 'defaultChecked',
    defaultValue: 'defaultValue',
    suppressContentEditableWarning: 'suppressContentEditableWarning',
    suppressHydrationWarning: 'suppressHydrationWarning',
    accessKey: 'accessKey',
    className: 'className',
    contentEditable: 'contentEditable',
    contextMenu: 'contextMenu',
    dir: 'dir',
    draggable: 'draggable',
    hidden: 'hidden',
    id: 'id',
    lang: 'lang',
    placeholder: 'placeholder',
    slot: 'slot',
    spellCheck: 'spellCheck',
    style: 'style',
    tabIndex: 'tabIndex',
    title: 'title',
    translate: 'translate',
    // Unknown
    radioGroup: 'radioGroup', // <command>, <menuitem>

    // WAI-ARIA
    role: 'role',

    // RDFa Attributes
    about: 'about',
    datatype: 'datatype',
    inlist: 'inlist',
    prefix: 'prefix',
    property: 'property',
    resource: 'resource',
    typeof: 'typeof',
    vocab: 'vocab',

    // Non-standard Attributes
    autoCapitalize: 'autoCapitalize',
    autoCorrect: 'autoCorrect',
    autoSave: 'autoSave',
    color: 'color',
    itemProp: 'itemProp',
    itemScope: 'itemScope',
    itemType: 'itemType',
    itemID: 'itemID',
    itemRef: 'itemRef',
    results: 'results',
    security: 'security',
    unselectable: 'unselectable',

    // Living Standard
    /**
     * Hints at the type of data that might be entered by the user while editing the element or its contents
     * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
     */
    inputMode: 'inputMode',
    /**
     * Specify that a standard HTML element should behave like a defined custom built-in element
     * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
     */
    is: 'is',
}

const EventHandlerPropsName = {
    onCopy: 'onCopy',
    onCopyCapture: 'onCopyCapture',
    onCut: 'onCut',
    onCutCapture: 'onCutCapture',
    onPaste: 'onPaste',
    onPasteCapture: 'onPasteCapture',

    // Composition Events
    onCompositionEnd: 'onCompositionEnd',
    onCompositionEndCapture: 'onCompositionEndCapture',
    onCompositionStart: 'onCompositionStart',
    onCompositionStartCapture: 'onCompositionStartCapture',
    onCompositionUpdate: 'onCompositionUpdate',
    onCompositionUpdateCapture: 'onCompositionUpdateCapture',

    // Focus Events
    onFocus: 'onFocus',
    onFocusCapture: 'onFocusCapture',
    onBlur: 'onBlur',
    onBlurCapture: 'onBlurCapture',

    // Form Events
    onChange: 'onChange',
    onChangeCapture: 'onChangeCapture',
    onBeforeInput: 'onBeforeInput',
    onBeforeInputCapture: 'onBeforeInputCapture',
    onInput: 'onInput',
    onInputCapture: 'onInputCapture',
    onReset: 'onReset',
    onResetCapture: 'onResetCapture',
    onSubmit: 'onSubmit',
    onSubmitCapture: 'onSubmitCapture',
    onInvalid: 'onInvalid',
    onInvalidCapture: 'onInvalidCapture',

    // Image Events
    onLoad: 'onLoad',
    onLoadCapture: 'onLoadCapture',
    onError: 'onError', // also a Media Event
    onErrorCapture: 'onErrorCapture', // also a Media Event

    // Keyboard Events
    onKeyDown: 'onKeyDown',
    onKeyDownCapture: 'onKeyDownCapture',
    /** @deprecated */
    onKeyPress: 'onKeyPress',
    /** @deprecated */
    onKeyPressCapture: 'onKeyPressCapture',
    onKeyUp: 'onKeyUp',
    onKeyUpCapture: 'onKeyUpCapture',

    // Media Events
    onAbort: 'onAbort',
    onAbortCapture: 'onAbortCapture',
    onCanPlay: 'onCanPlay',
    onCanPlayCapture: 'onCanPlayCapture',
    onCanPlayThrough: 'onCanPlayThrough',
    onCanPlayThroughCapture: 'onCanPlayThroughCapture',
    onDurationChange: 'onDurationChange',
    onDurationChangeCapture: 'onDurationChangeCapture',
    onEmptied: 'onEmptied',
    onEmptiedCapture: 'onEmptiedCapture',
    onEncrypted: 'onEncrypted',
    onEncryptedCapture: 'onEncryptedCapture',
    onEnded: 'onEnded',
    onEndedCapture: 'onEndedCapture',
    onLoadedData: 'onLoadedData',
    onLoadedDataCapture: 'onLoadedDataCapture',
    onLoadedMetadata: 'onLoadedMetadata',
    onLoadedMetadataCapture: 'onLoadedMetadataCapture',
    onLoadStart: 'onLoadStart',
    onLoadStartCapture: 'onLoadStartCapture',
    onPause: 'onPause',
    onPauseCapture: 'onPauseCapture',
    onPlay: 'onPlay',
    onPlayCapture: 'onPlayCapture',
    onPlaying: 'onPlaying',
    onPlayingCapture: 'onPlayingCapture',
    onProgress: 'onProgress',
    onProgressCapture: 'onProgressCapture',
    onRateChange: 'onRateChange',
    onRateChangeCapture: 'onRateChangeCapture',
    onSeeked: 'onSeeked',
    onSeekedCapture: 'onSeekedCapture',
    onSeeking: 'onSeeking',
    onSeekingCapture: 'onSeekingCapture',
    onStalled: 'onStalled',
    onStalledCapture: 'onStalledCapture',
    onSuspend: 'onSuspend',
    onSuspendCapture: 'onSuspendCapture',
    onTimeUpdate: 'onTimeUpdate',
    onTimeUpdateCapture: 'onTimeUpdateCapture',
    onVolumeChange: 'onVolumeChange',
    onVolumeChangeCapture: 'onVolumeChangeCapture',
    onWaiting: 'onWaiting',
    onWaitingCapture: 'onWaitingCapture',

    // MouseEvents
    onAuxClick: 'onAuxClick',
    onAuxClickCapture: 'onAuxClickCapture',
    onClick: 'onClick',
    onClickCapture: 'onClickCapture',
    onContextMenu: 'onContextMenu',
    onContextMenuCapture: 'onContextMenuCapture',
    onDoubleClick: 'onDoubleClick',
    onDoubleClickCapture: 'onDoubleClickCapture',
    onDrag: 'onDrag',
    onDragCapture: 'onDragCapture',
    onDragEnd: 'onDragEnd',
    onDragEndCapture: 'onDragEndCapture',
    onDragEnter: 'onDragEnter',
    onDragEnterCapture: 'onDragEnterCapture',
    onDragExit: 'onDragExit',
    onDragExitCapture: 'onDragExitCapture',
    onDragLeave: 'onDragLeave',
    onDragLeaveCapture: 'onDragLeaveCapture',
    onDragOver: 'onDragOver',
    onDragOverCapture: 'onDragOverCapture',
    onDragStart: 'onDragStart',
    onDragStartCapture: 'onDragStartCapture',
    onDrop: 'onDrop',
    onDropCapture: 'onDropCapture',
    onMouseDown: 'onMouseDown',
    onMouseDownCapture: 'onMouseDownCapture',
    onMouseEnter: 'onMouseEnter',
    onMouseLeave: 'onMouseLeave',
    onMouseMove: 'onMouseMove',
    onMouseMoveCapture: 'onMouseMoveCapture',
    onMouseOut: 'onMouseOut',
    onMouseOutCapture: 'onMouseOutCapture',
    onMouseOver: 'onMouseOver',
    onMouseOverCapture: 'onMouseOverCapture',
    onMouseUp: 'onMouseUp',
    onMouseUpCapture: 'onMouseUpCapture',

    // Selection Events
    onSelect: 'onSelect',
    onSelectCapture: 'onSelectCapture',

    // Touch Events
    onTouchCancel: 'onTouchCancel',
    onTouchCancelCapture: 'onTouchCancelCapture',
    onTouchEnd: 'onTouchEnd',
    onTouchEndCapture: 'onTouchEndCapture',
    onTouchMove: 'onTouchMove',
    onTouchMoveCapture: 'onTouchMoveCapture',
    onTouchStart: 'onTouchStart',
    onTouchStartCapture: 'onTouchStartCapture',

    // Pointer Events
    onPointerDown: 'onPointerDown',
    onPointerDownCapture: 'onPointerDownCapture',
    onPointerMove: 'onPointerMove',
    onPointerMoveCapture: 'onPointerMoveCapture',
    onPointerUp: 'onPointerUp',
    onPointerUpCapture: 'onPointerUpCapture',
    onPointerCancel: 'onPointerCancel',
    onPointerCancelCapture: 'onPointerCancelCapture',
    onPointerEnter: 'onPointerEnter',
    onPointerEnterCapture: 'onPointerEnterCapture',
    onPointerLeave: 'onPointerLeave',
    onPointerLeaveCapture: 'onPointerLeaveCapture',
    onPointerOver: 'onPointerOver',
    onPointerOverCapture: 'onPointerOverCapture',
    onPointerOut: 'onPointerOut',
    onPointerOutCapture: 'onPointerOutCapture',
    onGotPointerCapture: 'onGotPointerCapture',
    onGotPointerCaptureCapture: 'onGotPointerCaptureCapture',
    onLostPointerCapture: 'onLostPointerCapture',
    onLostPointerCaptureCapture: 'onLostPointerCaptureCapture',

    // UI Events
    onScroll: 'onScroll',
    onScrollCapture: 'onScrollCapture',

    // Wheel Events
    onWheel: 'onWheel',
    onWheelCapture: 'onWheelCapture',

    // Animation Events
    onAnimationStart: 'onAnimationStart',
    onAnimationStartCapture: 'onAnimationStartCapture',
    onAnimationEnd: 'onAnimationEnd',
    onAnimationEndCapture: 'onAnimationEndCapture',
    onAnimationIteration: 'onAnimationIteration',
    onAnimationIterationCapture: 'onAnimationIterationCapture',

    // Transition Events
    onTransitionEnd: 'onTransitionEnd',
    onTransitionEndCapture: 'onTransitionEndCapture',
}

export const ReactHTMLAttributes = [
    ...Object.keys(HTMLAttributesPropsName),
    ...Object.keys(EventHandlerPropsName),
]
