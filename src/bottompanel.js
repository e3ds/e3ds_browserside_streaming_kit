const e3ds_control_toggle = document.querySelector('.e3ds_control_toggle')
const e3ds_control_toggle_left = document.querySelector('.e3ds_control_toggle_left')
const e3ds_control_toggle_icon = document.querySelector('.e3ds_control_toggle_icon')
const e3ds_control_toggle_icon_left = document.querySelector('.e3ds_control_toggle_icon_left')
const e3ds_bottom_panel_controls = document.querySelector('.e3ds_bottom_panel_controls')
const e3ds_bottom_panel_controls_left = document.querySelector('.e3ds_bottom_panel_controls_left')
let e3ds_controls_open_state = true
let e3ds_controls_left_bottom_open_state = true;

function hidemenuAtStart() {
  if(e3ds_bottom_panel_controls)e3ds_bottom_panel_controls.style.right = `-250px`
  e3ds_controls_open_state = false
}

function toggleMenu() {
  const elements = document.getElementsByClassName("options-container");
  elements[0].classList.toggle("isVisible");
}

function showAnnouncement() {
  const elements = document.getElementsByClassName("announcement");
  elements[0].classList.add("isVisible");
}

function removeAnnouncement() {
  const elements = document.getElementsByClassName("announcement");
  elements[0].classList.remove("isVisible");
}

hidemenuAtStart()

function openState(panelPosition = "right") {
  if (panelPosition === "left") {
	  if(e3ds_bottom_panel_controls_left)
    if(e3ds_bottom_panel_controls_left)e3ds_bottom_panel_controls_left.style.left = '48px';
    if(e3ds_control_toggle_icon_left)e3ds_control_toggle_icon_left.style.transform = 'rotate(0deg)'

    e3ds_controls_left_bottom_open_state = true
    return;
  }
  if(e3ds_bottom_panel_controls)e3ds_bottom_panel_controls.style.right = '44px'
  if(e3ds_control_toggle_icon)e3ds_control_toggle_icon.style.transform = 'rotate(0deg)'
  e3ds_controls_open_state = true
}
function closeState(controls_width, panelPosition = "right") {
  console.log("Closing ", panelPosition, controls_width);
   controls_width = e3ds_bottom_panel_controls.offsetWidth;
  if (panelPosition === "left") {
    console.log("panel closing", panelPosition)
	if(e3ds_bottom_panel_controls_left)
    e3ds_bottom_panel_controls_left.style.left = `-${controls_width}px`
    e3ds_controls_left_bottom_open_state = false;
    return;
  }

  if(e3ds_bottom_panel_controls)e3ds_bottom_panel_controls.style.right = `-${400}px`
  e3ds_controls_open_state = false
}
let controls_width = 0
if(e3ds_bottom_panel_controls)
controls_width=e3ds_bottom_panel_controls.offsetWidth;

function toggleState(panelPosition = "right") {
  let handlePosition = "right";
  console.log("Toggling", panelPosition);
  let shouldOpen = true;
  if (panelPosition === "left") {
    shouldOpen = e3ds_controls_left_bottom_open_state;
  } else {
    shouldOpen = e3ds_controls_open_state;
  }
  if (shouldOpen) {
    closeState(controls_width, panelPosition);
  } else {
    openState(panelPosition)
  }
}

//toggleState()
//console.log(e3ds_control_toggle_left)
if(e3ds_control_toggle)
e3ds_control_toggle.addEventListener('click', () =>
  toggleState()
)

var voipControlPanel=document.getElementById("voipControlPanel")
if(voipControlPanel)voipControlPanel.style.display = "flex";
openState("left");
if(e3ds_control_toggle_left)
e3ds_control_toggle_left.addEventListener('click', () => {
  let currentStatus = document.getElementById("voipControlPanel").style.display;
  if (currentStatus === "block" || currentStatus === "flex") {
   if(voipControlPanel)voipControlPanel.style.display = "none";
    closeState(controls_width, "left");
  } else {
   if(voipControlPanel)voipControlPanel.style.display = "flex";
    openState("left");
  }
}

)
