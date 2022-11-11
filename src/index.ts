import './style/index.css';
import UIkit from 'uikit'

import Main from './Main.svelte';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons)

const app = new Main({
    target: document.body,
});