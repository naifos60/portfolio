"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const Card_1 = __importDefault(require("../Card/Card"));
const Modal_1 = __importDefault(require("../Modal/Modal"));
const react_2 = require("react");
function Progress({ percent, color, logo, skill, children }) {
    const [open, setOpen] = (0, react_2.useState)(false);
    const [hover, setHover] = (0, react_2.useState)(false);
    function toggleModal() {
        setOpen(!open);
    }
    function changeTextAtHover() {
        setHover(!hover);
    }
    return (<div className='w-full px-4 lg:w-full lg:px-16 mt-4 h-8 mb-0  cursor-pointer' onClick={toggleModal}>
        <div onMouseEnter={changeTextAtHover} onMouseLeave={changeTextAtHover} className='bg-white  relative h-10 w-full rounded-md mb-8 bottom-4 brightness-100 hover:brightness-120 scale-100 hover:scale-105'>
          <div className={`absolute top-0 left-0 flex h-full  items-center justify-between rounded-md text-xs`} style={{ backgroundColor: `${color}`, width: `${percent}` }}>
            {!hover ? <p className='font-serif text-xs absolute left-1/2'>{skill}</p> : <p className='font-serif text-xs absolute left-1/2 bg-white bg-opacity-60 rounded-lg px-2'>OPEN</p>}
         <p className='absolute right-1'>{percent}</p>
         <img src={logo} alt={'logo' + skill} className='font-lora mx-2 w-14 h-full absolute -left-2'/>
        </div>
      </div>
      {open &&
            <Modal_1.default open={open} onClose={() => setOpen(false)} children={<Card_1.default logo={logo} title={skill} content={children}/>}/>}
    </div>);
}
Progress.propsTypes = {
    percent: prop_types_1.default.string.isRequired,
    color: prop_types_1.default.string.isRequired,
    logo: prop_types_1.default.string.isRequired,
    skill: prop_types_1.default.string.isRequired,
};
exports.default = Progress;
