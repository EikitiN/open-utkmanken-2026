/*
	returnについて
	return [num, data];
	num:
		0 ボタン待ち
		1 次に進む
		2 dataが0-basedの次に実行する行番号
		10 sc_varを保存してボタン待ち
		11 sc_varを保存して次に進む
	関数一覧:
		sc_if:
			第一引数 条件式 変数、配列内アクセス、辞書内アクセス、[true/false]、数値、==,!=,>=,<=,>,<を利用可能
			第二引数 条件式がtrueのときに実行する行番号(1-based)
			第三引数 条件式がfalseのときに実行する行番号(1-based)
			return [2, result ? trueLine : falseLine]
		jumpto:
			第一引数 次に実行する行番号(1-based)
			return [2, Number(args[0]) - 1]
		setvar:
			第一引数 do_nextフラグ[0/1]
			第二引数 設定する変数名(変数名、配列内アクセス、辞書内アクセス)
			第三引数 代入する値("文字列"、数値、配列[]、辞書{}、変数名、配列内アクセス、辞書内アクセス)
			return [11, null] / [10, null];
		sc_calc:
			第一引数 do_nextフラグ[0/1]
			第二引数 計算に使う変数(変数名、配列内アクセス、辞書内アクセス)
			第三引数 演算子(+,-,*,/,%,^)
			第四引数 計算に使う変数または値など(変数名、配列内アクセス、辞書内アクセス、"文字列(+=のみ)"、数値)
			return [11, null] / [10, null]
		dialogue:
			注意: テスト用関数。disp_textへ統合
			第一引数 内容
			第二引数 nomal/html
			第三引数 内部キャラ名
			第四引数 表示キャラ名
			第五引数 補助オプション
			return [0, null]
		debug_dispvar: //パス 今ある内容を消すかどうか do_next
			注意: テスト用関数。disp_textへ統合
			第一引数 表示変数のパス
			第二引数 表示中の内容を消す[0/1]
			第三引数 do_nextフラグ[0/1]
			return [1, null] / [0, null]
		dispIMG:
			第一引数 do_nextフラグ[0/1]
			第二引数 表示先
				bg 背景
				chara characanvas
				back back_item_canvas
				front front_item_canvas
				その他 そのidの既存要素
			第三引数 表示フラグ[1/0]
			第四引数 画像パス(ASSETS.imgs内、非表示時はNone可)
			第五引数 フェード有無[1/0]
			第六引数 フェード時間[s]
			第七引数 画像要素id(省略可)
			return [1, null] / [0, null]
		statusIMG:
			第一引数 do_nextフラグ
			第二引数 対象id(bg/chara/back/front/任意id)
			第三引数 状態設定{x:60,y:0,width:35,height:auto,duration:500}
			return [1, null] / [0, null]
		sympleBGchange:
			注意: テスト用関数。dispIMGへ統合
			第一引数 画像パス(ASSETS.img内)
			第二引数 画像を表示するか[0/1]
			第三引数 画像を消すか[0/1]
			第四引数 do_nextフラグ[0/1]
			return [1, null] / [0, null]
		console_dispvar:
			注意: テスト用関数。disp_textへ統合
			第一引数 変数パス
			第二引数 do_nextフラグ[0/1]
			return [1, null] / [0, null]
		clear_scline_counter:
			引数なし
			return [1, null]
		disp_text:
			第一引数 do_nextフラグ
			第二引数 表示場所[dialogue/console/その他は表示場所のid]
			第三引数 表示内容(${sc_varの中のパス}でその変数内のデータを文字列に変換したもの、エスケープされてない<は次の>までをhtml要素として扱う。これには対応する</～>が必要となる)
			第四引数 スタイル設定名(デフォルト値はNone), キャラid(キャラ立ち絵のフォルダ名)
			第五引数 表示名<漢字:ルビ>でルビを表現
			×第六引数 [表示内容に含めたhtml要素のid,適応したいstyle要素]のリスト
			第六引数 {設定項目:値}
		status_text:
			第一引数 do_nextフラグ
			第二引数 対象id(dialogue/name/nameFrame/textFrame/任意id)
			第三引数 状態設定{color:#ff99ff,scale:1.15,shake:1,duration:500}
			return [1, null] / [0, null]
		effect_screen:
			第一引数 do_nextフラグ
			第二引数以降 画面全体エフェクト設定{type:fade,color:black,opacity:0.5,duration:500}
			return [1, null] / [0, null]
		add_html:
			第一引数 do_nextフラグ
			第二引数 追加先の親要素id(dialogueはtextcontent)
			第三引数 追加位置[beforeend/afterbegin/beforebegin/afterend]
			第四引数以降 追加するHTML
			return [1, null] / [0, null]
		parallel:
			第一引数 do_nextフラグ[0/1]
			第二引数 行番号/funcName(args)
			第三引数 行番号/funcName(args)
		clearvar:
			第一引数 do_nextフラグ
			第二引数 変数パス
			第三引数 設定:
				1:再帰的に下層をundefinedに置き換え(辞書のキーは残す)
				2:変数自体の削除(その下層の変数も)->配列は消した分詰められる
				3:最外層のみundefinedに置き換え
		vibration:
			第一引数 do_nextフラグ
			第二引数 持続時間[s]
		jsRun:
			第一引数 do_nextフラグ
			第二引数 jsスクリプト
		release_arasuzi: テスト関数
			第一引数 do_nextフラグ
			第二引数 解放するあらすじ番号
			return [41, 番号] / [40, 番号]
		end:
			引数なし
			return [-1, null]
*/
import { sc_var, summary_sc_var, current_display, ASSETS, do_inaninstant } from './engine.js';
let audioCtx = null;
export let settingsJson = null;//キャラ設定、位置設定など
try {
	const response = await fetch('settings/chara_settings.json'); 
	settingsJson = await response.json();
} catch (error) {
	console.warn("chara_settings.jsonを読み取れませんでした: ", error)
}
function getScenarioVars() {
	if (current_display === "record_summary" && typeof summary_sc_var === "object" && summary_sc_var !== null) {
		return summary_sc_var;
	}
	return sc_var;
}
export function stopAllSounds() {
    if (audioCtx && audioCtx.state !== 'closed') {
        audioCtx.suspend();
    }
}
function setvar_logical({ path, value }) {// path: ["a", 1, "key", ...] value: 代入する値
    const scenarioVars = getScenarioVars();
    if (typeof scenarioVars !== "object" || scenarioVars === null) {
        console.warn("setvar: 使用できるシナリオ変数がありません。");
        return false;
    }
	if (typeof value === "object" && value.varRef) {
		const path = parseSetvarPath(value.varRef);
		value = GetValueFromsc_var(path);
	}
    let current = scenarioVars;
    for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        const nextKey = path[i + 1];
        if (current[key] === undefined) {
            current[key] = (typeof nextKey === "number") ? [] : {};
        }
        if (Array.isArray(current[key]) && typeof nextKey === "string") {
			console.log(`${current}が辞書に置換されました`);
            current[key] = {};  // 辞書に上書き
        }
        if (!Array.isArray(current[key]) && typeof nextKey === "number") {
            const newArr = [];
			console.log(`${current}が配列に置換されました`);
            current[key] = newArr;  // 配列に上書き
        }
        current = current[key];
    }
    const lastKey = path[path.length - 1];
    current[lastKey] = value;
    return true;
}
function parseSetvarPath(raw) { //a[1]["key"][2] → ["a", 1, "key", 2]
    const path = [];
    const first = raw.split("[")[0];
    path.push(first);
    const regex = /\[(.*?)\]/g;
    let match;
    while ((match = regex.exec(raw)) !== null) {
        const token = match[1];

        if (/^\d+$/.test(token)) {
            path.push(Number(token));
            continue;
        }
        if (/^".*"$/.test(token)) {
            path.push(token.slice(1, -1));
            continue;
        }
        path.push(token);
    }
    return path;
}
function parseSetvarValue(raw) {
    if (/^".*"$/.test(raw)) {
        return raw.slice(1, -1);
    }
    if (/^-?\d+(\.\d+)?$/.test(raw)) {
        return Number(raw);
    }
    if (/^\[.*\]$/.test(raw)) {
        try {
            return JSON.parse(raw);
        } catch {
            return raw;
        }
    }
    if (/^\{.*\}$/.test(raw)) {
        try {
            return JSON.parse(raw);
        } catch {
            return raw;
        }
    }
    if (/^[A-Za-z_]/.test(raw)) {
        return { varRef: raw };
    }
    return raw;
}
function GetValueFromsc_var(path) { // path: ["a", 1, "key"]
    const scenarioVars = getScenarioVars();
    if (typeof scenarioVars !== "object" || scenarioVars === null) {
        return undefined;
    }
    let current = scenarioVars;
    for (let i = 0; i < path.length; i++) {
        const key = path[i];

        if (current[key] === undefined) {
            return undefined;
        }
        current = current[key];
    }
    return current;
}
function parseScIfValue(raw, useLiteralFallback) {
	if (/^".*"$/.test(raw)) return raw.slice(1, -1);
	if (/^-?\d+(\.\d+)?$/.test(raw)) return Number(raw);
	if (raw === "true") return true;
	if (raw === "false") return false;
	const value = GetValueFromsc_var(parseSetvarPath(raw));
	if (value !== undefined) return value;
	return useLiteralFallback ? raw.replace(/"/g, "") : undefined;
}

export const COMMANDS = {
	sc_if: (args) => {
		const condition = args[0];
		const trueLine = Number(args[1]) - 1;
		const falseLine = Number(args[2]) - 1;

		const match = condition.match(/(.+?)(==|!=|>=|<=|>|<)(.+)/);
		const leftKey = match[1].trim();
		const op = match[2];
		const rightRaw = match[3].trim();

		const left = parseScIfValue(leftKey, false);
		const right = parseScIfValue(rightRaw, true);

		let result = false;
		switch (op) {
			case "==": result = (left == right); break;
			case "!=": result = (left != right); break;
			case ">":  result = (left >  right); break;
			case "<":  result = (left <  right); break;
			case ">=": result = (left >= right); break;
			case "<=": result = (left <= right); break;
		}

		return [2, result ? trueLine : falseLine];
	},
	jumpto: (args) => [2, Number(args[0]) - 1],
	setvar: (args) => { //args = [do_next_flag, left_raw, right_raw]
		const doNextFlag = Number(args[0]);
		const leftRaw = args[1];
		const rightRaw = args[2];
		const path = parseSetvarPath(leftRaw);
		const value = parseSetvarValue(rightRaw);
		setvar_logical({ path, value });
		return doNextFlag === 1 ? [11, null] : [10, null];
	},
	sc_calc: (args) => { // args = [do_next, left_raw, operator, right_raw]
		const doNextFlag = Number(args[0]);
		const leftRaw = args[1];
		const operator = args[2];
		const rightRaw = args[3];
		const leftPath = parseSetvarPath(leftRaw);
		let rightValue;
		if (/^-?\d+(\.\d+)?$/.test(rightRaw)) {
			rightValue = Number(rightRaw);
		} else {
			const rightPath = parseSetvarPath(rightRaw);
			rightValue = GetValueFromsc_var(rightPath);
		}
		let leftValue = GetValueFromsc_var(leftPath);
		if (leftValue === undefined) {
			leftValue = 0;
		}
		if (typeof rightValue !== "number" || isNaN(rightValue)) {
			console.warn("sc_calc: 計算に使う引数が文字列/リスト/辞書/未定義だったため、計算は行われませんでした。");
			return doNextFlag === 1 ? [11, null] : [10, null];
		}
		let result;
		switch (operator) {
			case "+":
				result = leftValue + rightValue;
				break;
			case "-":
				result = leftValue - rightValue;
				break;
			case "*":
				result = leftValue * rightValue;
				break;
			case "/":
				if (rightValue === 0) {
					console.warn("sc_calc: 0 で割ることはできません。計算は行われませんでした。");
					return doNextFlag === 1 ? [11, null] : [10, null];
				}
				result = leftValue / rightValue;
				break;
			case "%":
				if (rightValue === 0) {
					console.warn("sc_calc: 0 で割ることはできません（剰余）。計算は行われませんでした。");
					return doNextFlag === 1 ? [11, null] : [10, null];
				}
				result = leftValue % rightValue;
				break;
			case "^":
				result = leftValue ** rightValue;
				break;
			default:
				console.warn(`sc_calc: 未対応の演算子 '${operator}' が指定されました。`);
				return doNextFlag === 1 ? [11, null] : [10, null];
		}
		setvar_logical({ path: leftPath, value: result });
		return doNextFlag === 1 ? [11, null] : [10, null];
	},
	dialogue: (args) => { //未完成->テスト用
		if (args[1] === "html") {
			document.getElementById("textcontent").innerHTML = args[0];
		} else {
			document.getElementById("textcontent").textContent = args[0];
		}
		return [30, null];
	},
	debug_dispvar: (args) => { //パス 今ある内容を消すかどうか do_next
		const varName = args[0];
		const scenarioVars = getScenarioVars();
		let content = "";
		if (scenarioVars[varName] === undefined) {
			content = `<pre>${varName} is undefined</pre>`;
		} else {
			content = `<pre>${varName} = ${JSON.stringify(scenarioVars[varName], null, 2)}</pre>`;
		}
		const debugArea = document.getElementById("textcontent");
		if (debugArea) {
			if (args[1] === "1") {
				debugArea.innerHTML = "";
			}
			debugArea.innerHTML += content;
		}
		return args[2] === "1" ? [31, null] : [30, null];
	},
	dispIMG: (args) => { //do_nextフラグ 適応先id 1:表示/0:非表示
		const disp_id = args[1];
		const show_flag = args[2] === "1";
		const image_path = args[3];
		const fade_flag = args[4] === "1";
		let fade_time = Number(args[5]);
		if (!Number.isFinite(fade_time) || fade_time < 0) {
			console.warn(`dispIMG: フェード時間 '${args[5]}' が不正です。0秒として扱います。`);
			fade_time = 0;
		}
		const fade_ms = fade_flag && !do_inaninstant ? fade_time * 1000 : 0;
		const image_id = args[6];
		const finishReturn = args[0] === "1" ? [1, null] : [0, null];
		const convertSvgToSrcDataUrl = (svgText) => {
			if (!svgText.includes('xmlns="http://www.w3.org/2000/svg"')) {
				svgText = svgText.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
			}
			const base64 = btoa(unescape(encodeURIComponent(svgText)));
			return `data:image/svg+xml;base64,${base64}`;
		}
		const getImageUrl = (path) => {
			if (!path || path === "None") return "";
			if (ASSETS.imgs[path] !== undefined) {
				return ASSETS.imgs[path];
			}
			if (ASSETS.svg[path] !== undefined) {
				return convertSvgToSrcDataUrl(ASSETS.svg[path]);
			}
			console.warn(`dispIMG: 画像 '${path}' がASSETS.imgs/ASSETS.svgに見つかりません。`);
			return null;
		}
		const clearDispImgFadeTimer = (target) => {
			if (!target?.dataset?.dispImgFadeTimer) return;
			clearTimeout(Number(target.dataset.dispImgFadeTimer));
			delete target.dataset.dispImgFadeTimer;
		}
		if (disp_id === "bg") {
			const bg = document.getElementById("gamebg");
			if (!bg) {
				console.warn("dispIMG: 背景要素 '#gamebg' が見つかりません。");
				return finishReturn;
			}
			bg.style.position = "absolute";
			bg.style.top = "0";
			bg.style.left = "0";
			bg.style.zIndex = "0";
			bg.style.overflow = "hidden";
			bg.style.pointerEvents = "none";
			clearDispImgFadeTimer(bg);
			bg.querySelectorAll(".disp-img-bg-fade-layer").forEach(layer => layer.remove());
			bg.style.opacity = "1";
			if (!show_flag) {
				if (fade_ms > 0) {
					bg.style.transition = `opacity ${fade_ms}ms`;
					bg.style.opacity = "0";
					const timerId = setTimeout(() => {
						if (bg.dataset.dispImgFadeTimer !== String(timerId)) return;
						bg.style.setProperty("--gamebg-url", "none");
						bg.style.opacity = "1";
						delete bg.dataset.dispImgFadeTimer;
					}, fade_ms);
					bg.dataset.dispImgFadeTimer = String(timerId);
				} else {
					bg.style.setProperty("--gamebg-url", "none");
				}
				return finishReturn;
			}
			const img_url = getImageUrl(image_path);
			if (img_url === null) return finishReturn;
			if (fade_ms > 0) {
				const fadeLayer = document.createElement("div");
				fadeLayer.classList.add("disp-img-bg-fade-layer");
				fadeLayer.style.position = "absolute";
				fadeLayer.style.inset = "0";
				fadeLayer.style.backgroundImage = `url(${img_url})`;
				fadeLayer.style.backgroundSize = "cover";
				fadeLayer.style.backgroundPosition = "center";
				fadeLayer.style.opacity = "0";
				fadeLayer.style.transition = `opacity ${fade_ms}ms`;
				bg.appendChild(fadeLayer);
				requestAnimationFrame(() => {
					fadeLayer.style.opacity = "1";
				});
				const timerId = setTimeout(() => {
					if (bg.dataset.dispImgFadeTimer !== String(timerId)) return;
					bg.style.setProperty("--gamebg-url", `url(${img_url})`);
					fadeLayer.remove();
					delete bg.dataset.dispImgFadeTimer;
				}, fade_ms);
				bg.dataset.dispImgFadeTimer = String(timerId);
			} else {
				bg.style.setProperty("--gamebg-url", `url(${img_url})`);
			}
			return finishReturn;
		}
		const targetMap = {
			chara: "characanvas",
			back: "back_item_canvas",
			front: "front_item_canvas"
		};
		let target = document.getElementById(targetMap[disp_id] || disp_id);
		if (!target) {
			console.warn(`dispIMG: 表示先 '${disp_id}' が見つかりません。`);
			return finishReturn;
		}
		let img;
		if (target.tagName === "IMG" && !image_id) {
			img = target;
		} else {
			const defaultId = disp_id === "chara" ? "kari" : `dispIMG_${disp_id}`;
			const target_image_id = image_id || defaultId;
			img = document.getElementById(target_image_id);
			if (!img) {
				img = document.createElement("img");
				img.id = target_image_id;
				target.appendChild(img);
			}
			if (disp_id === "chara" && target_image_id !== "kari") {
				const kari = document.getElementById("kari");
				if (kari && !kari.dataset.dispimgManaged) kari.style.display = "none";
			}
		}
		clearDispImgFadeTimer(img);
		img.dataset.dispimgManaged = "1";
		img.style.position = "absolute";
		img.style.bottom = img.style.bottom || "0";
		img.style.left = img.style.left || "0";
		img.style.width = img.style.width || "100%";
		img.style.pointerEvents = "none";
		if (!show_flag) {
			if (fade_ms > 0) {
				img.style.transition = `opacity ${fade_ms}ms`;
				img.style.opacity = "0";
				const timerId = setTimeout(() => {
					if (img.dataset.dispImgFadeTimer !== String(timerId)) return;
					img.style.display = "none";
					delete img.dataset.dispImgFadeTimer;
				}, fade_ms);
				img.dataset.dispImgFadeTimer = String(timerId);
			} else {
				img.style.display = "none";
			}
			return finishReturn;
		}
		const img_url = getImageUrl(image_path);
		if (img_url === null) return finishReturn;
		img.dataset.dispImgSourcePath = image_path;
		img.style.display = "block";
		if (fade_ms > 0) {
			img.style.transition = "none";
			img.style.opacity = "0";
			img.src = img_url;
			requestAnimationFrame(() => {
				img.style.transition = `opacity ${fade_ms}ms`;
				img.style.opacity = "1";
			});
		} else {
			img.style.transition = "";
			img.style.opacity = "1";
			img.src = img_url;
		}
		return finishReturn;
	},
	statusIMG: (args) => { //do_nextフラグ 適応先id {x:60,y:0,width:35,height:auto,duration:500}
		const finishReturn = args[0] === "1" ? [1, null] : [0, null];
		const disp_id = args[1];
		const rawSetting = args.slice(2).join(" ");
		const parseStatusSetting = (raw) => {
			if (typeof raw === "object" && raw !== null) return raw;
			if (!raw || raw === "None" || raw === "{}") return {};
			const trimmed = String(raw).trim();
			try {
				return JSON.parse(trimmed);
			} catch (error) {
				if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) {
					console.warn("statusIMG: 第三引数の設定を解析できませんでした。", error);
					return {};
				}
				return trimmed.slice(1, -1).split(/[;,]/).reduce((settingObject, pair) => {
					if (!pair) return settingObject;
					const separatorIndex = pair.indexOf(":");
					if (separatorIndex === -1) return settingObject;
					const key = pair.slice(0, separatorIndex).trim();
					let value = pair.slice(separatorIndex + 1).trim();
					value = value.replace(/^["']|["']$/g, "");
					if (/^-?\d+(\.\d+)?$/.test(value)) value = Number(value);
					if (value === "true") value = true;
					if (value === "false") value = false;
					if (key) settingObject[key] = value;
					return settingObject;
				}, {});
			}
		}
		const toCssValue = (value, unit) => {
			if (value === undefined || value === null || value === "None") return null;
			if (value === "auto") return "auto";
			if (typeof value === "number") return `${value}${unit}`;
			const text = String(value);
			if (/^-?\d+(\.\d+)?$/.test(text)) return `${text}${unit}`;
			return text;
		}
		const toDuration = (value) => {
			if (value === undefined || value === null || value === "None") return "0ms";
			if (typeof value === "number") return `${Math.max(value, 0)}ms`;
			const text = String(value);
			if (/^-?\d+(\.\d+)?$/.test(text)) return `${Math.max(Number(text), 0)}ms`;
			return text;
		}
		const normalizeFilterValue = (value, unit) => {
			if (value === undefined || value === null || value === "None") return null;
			if (typeof value === "number") return `${value}${unit}`;
			const text = String(value);
			if (/^-?\d+(\.\d+)?$/.test(text)) return `${text}${unit}`;
			return text;
		}
		let statusSetting = parseStatusSetting(rawSetting);
		if (statusSetting.position) {
			const positionSetting = settingsJson?.position?.[statusSetting.position];
			if (positionSetting) {
				statusSetting = { ...positionSetting, ...statusSetting };
			} else {
				console.warn(`statusIMG: position '${statusSetting.position}' がsettingsに見つかりません。`);
			}
		}
		if (statusSetting.size) {
			const sizeSetting = settingsJson?.size?.[statusSetting.size];
			if (sizeSetting) {
				statusSetting = { ...sizeSetting, ...statusSetting };
			} else {
				console.warn(`statusIMG: size '${statusSetting.size}' がsettingsに見つかりません。`);
			}
		}
		const targetMap = {
			bg: "gamebg",
			chara: "kari",
			back: "dispIMG_back",
			front: "dispIMG_front"
		};
		const target = document.getElementById(targetMap[disp_id] || disp_id);
		if (!target) {
			console.warn(`statusIMG: 対象 '${disp_id}' が見つかりません。`);
			return finishReturn;
		}
		target.classList.add("img-transform");
		target.style.setProperty("--duration", do_inaninstant ? "0ms" : toDuration(statusSetting.duration));
		target.style.setProperty("--easing", statusSetting.easing || "ease");
		if (target.style.position === "") target.style.position = "absolute";
		if (statusSetting.x !== undefined || statusSetting.left !== undefined) target.style.left = toCssValue(statusSetting.x ?? statusSetting.left, "%");
		if (statusSetting.y !== undefined || statusSetting.top !== undefined) {
			target.style.top = toCssValue(statusSetting.y ?? statusSetting.top, "%");
			target.style.bottom = "auto";
		}
		if (statusSetting.bottom !== undefined) {
			target.style.bottom = toCssValue(statusSetting.bottom, "%");
			target.style.top = "auto";
		}
		if (statusSetting.width !== undefined) target.style.width = toCssValue(statusSetting.width, "%");
		if (statusSetting.height !== undefined) target.style.height = toCssValue(statusSetting.height, "%");
		if (statusSetting.zIndex !== undefined) target.style.zIndex = String(statusSetting.zIndex);
		if (statusSetting.opacity !== undefined) target.style.opacity = String(statusSetting.opacity);
		if (statusSetting.transformOrigin !== undefined) target.style.setProperty("--transform-origin", String(statusSetting.transformOrigin));
		if (statusSetting.perspective !== undefined) target.style.setProperty("--perspective", toCssValue(statusSetting.perspective, "px"));
		if (statusSetting.translateX !== undefined) target.style.setProperty("--translate-x", toCssValue(statusSetting.translateX, "px"));
		if (statusSetting.translateY !== undefined) target.style.setProperty("--translate-y", toCssValue(statusSetting.translateY, "px"));
		if (statusSetting.rotateX !== undefined) target.style.setProperty("--rotate-x", toCssValue(statusSetting.rotateX, "deg"));
		if (statusSetting.rotateY !== undefined) target.style.setProperty("--rotate-y", toCssValue(statusSetting.rotateY, "deg"));
		if (statusSetting.rotate !== undefined) target.style.setProperty("--rotate", toCssValue(statusSetting.rotate, "deg"));
		if (statusSetting.scale !== undefined) {
			target.style.setProperty("--scale-x", String(statusSetting.scale));
			target.style.setProperty("--scale-y", String(statusSetting.scale));
		}
		if (statusSetting.scaleX !== undefined) target.style.setProperty("--scale-x", String(statusSetting.scaleX));
		if (statusSetting.scaleY !== undefined) target.style.setProperty("--scale-y", String(statusSetting.scaleY));
		if (statusSetting.flipX !== undefined) {
			const scaleX = Number(statusSetting.scaleX ?? statusSetting.scale ?? 1);
			target.style.setProperty("--scale-x", statusSetting.flipX === "0" || statusSetting.flipX === false ? String(Math.abs(scaleX)) : String(-Math.abs(scaleX)));
		}
		if (statusSetting.flipY !== undefined) {
			const scaleY = Number(statusSetting.scaleY ?? statusSetting.scale ?? 1);
			target.style.setProperty("--scale-y", statusSetting.flipY === "0" || statusSetting.flipY === false ? String(Math.abs(scaleY)) : String(-Math.abs(scaleY)));
		}
		if (statusSetting.filter === "None" || statusSetting.filter === "none") {
			target.style.filter = "";
		} else if (statusSetting.filter !== undefined) {
			target.style.filter = String(statusSetting.filter);
		} else if (statusSetting.brightness !== undefined || statusSetting.blur !== undefined || statusSetting.saturate !== undefined) {
			const filters = [];
			const brightness = normalizeFilterValue(statusSetting.brightness, "%");
			const blur = normalizeFilterValue(statusSetting.blur, "px");
			const saturate = normalizeFilterValue(statusSetting.saturate, "%");
			if (brightness !== null) filters.push(`brightness(${brightness})`);
			if (blur !== null) filters.push(`blur(${blur})`);
			if (saturate !== null) filters.push(`saturate(${saturate})`);
			target.style.filter = filters.join(" ");
		}
		return finishReturn;
	},
	effect_screen: (args) => {
		const finishReturn = args[0] === "1" ? [1, null] : [0, null];
		const rawSetting = args.slice(1).join(" ");
		const parseEffectSetting = (raw) => {
			if (typeof raw === "object" && raw !== null) return raw;
			if (!raw || raw === "None" || raw === "{}") return {};
			const trimmed = String(raw).trim();
			try {
				return JSON.parse(trimmed);
			} catch (error) {
				if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) {
					console.warn("effect_screen: 設定を解析できませんでした。", error);
					return {};
				}
				return trimmed.slice(1, -1).split(/[;,]/).reduce((settingObject, pair) => {
					if (!pair) return settingObject;
					const separatorIndex = pair.indexOf(":");
					if (separatorIndex === -1) return settingObject;
					const key = pair.slice(0, separatorIndex).trim();
					let value = pair.slice(separatorIndex + 1).trim();
					value = value.replace(/^["']|["']$/g, "");
					if (/^-?\d+(\.\d+)?$/.test(value)) value = Number(value);
					if (value === "true") value = true;
					if (value === "false") value = false;
					if (key) settingObject[key] = value;
					return settingObject;
				}, {});
			}
		}
		const toDuration = (value, defaultMs = 500) => {
			if (do_inaninstant) return "0ms";
			if (value === undefined || value === null || value === "None") return `${defaultMs}ms`;
			if (typeof value === "number") return `${Math.max(value, 0)}ms`;
			const text = String(value);
			if (/^-?\d+(\.\d+)?$/.test(text)) return `${Math.max(Number(text), 0)}ms`;
			return text;
		}
		const durationToMs = (durationText) => {
			const text = String(durationText);
			if (/^-?\d+(\.\d+)?ms$/.test(text)) return Math.max(Number(text.replace("ms", "")), 0);
			if (/^-?\d+(\.\d+)?s$/.test(text)) return Math.max(Number(text.replace("s", "")) * 1000, 0);
			if (/^-?\d+(\.\d+)?$/.test(text)) return Math.max(Number(text), 0);
			return 0;
		}
		const toCssLength = (value, unit = "px") => {
			if (value === undefined || value === null || value === "None") return null;
			if (typeof value === "number") return `${value}${unit}`;
			const text = String(value);
			if (/^-?\d+(\.\d+)?$/.test(text)) return `${text}${unit}`;
			return text;
		}
		const negateCssLength = (value) => {
			const text = String(value);
			return text.startsWith("-") ? text.slice(1) : `-${text}`;
		}
		const normalizeFilterValue = (value, unit) => {
			if (value === undefined || value === null || value === "None") return null;
			if (typeof value === "number") return `${value}${unit}`;
			const text = String(value);
			if (/^-?\d+(\.\d+)?$/.test(text)) return `${text}${unit}`;
			return text;
		}
		const getBase = () => document.getElementById("maindisplaybase") || document.querySelector(".base") || document.body;
		const fitOverlayToPlayArea = (overlay, base) => {
			const playArea = document.getElementById("gamebg");
			if (!playArea || !base.contains(playArea)) {
				overlay.style.inset = "0";
				overlay.style.left = "";
				overlay.style.top = "";
				overlay.style.width = "";
				overlay.style.height = "";
				return;
			}
			const baseRect = base.getBoundingClientRect();
			const playAreaRect = playArea.getBoundingClientRect();
			overlay.style.inset = "auto";
			overlay.style.left = `${playAreaRect.left - baseRect.left}px`;
			overlay.style.top = `${playAreaRect.top - baseRect.top}px`;
			overlay.style.width = `${playAreaRect.width}px`;
			overlay.style.height = `${playAreaRect.height}px`;
		}
		const clearScreenEffectTimer = (target) => {
			if (!target?.dataset?.screenEffectTimer) return;
			clearTimeout(Number(target.dataset.screenEffectTimer));
			delete target.dataset.screenEffectTimer;
		}
		const clearScreenEffectMotion = (base) => {
			base.classList.remove("screen-effect-shake", "screen-effect-slide");
			base.style.removeProperty("--screen-effect-duration");
			base.style.removeProperty("--screen-effect-easing");
			base.style.removeProperty("--screen-effect-count");
			base.style.removeProperty("--screen-effect-shake-x");
			base.style.removeProperty("--screen-effect-shake-y");
			base.style.removeProperty("--screen-effect-shake-minus-x");
			base.style.removeProperty("--screen-effect-shake-minus-y");
			base.style.removeProperty("--screen-effect-slide-x");
			base.style.removeProperty("--screen-effect-slide-y");
		}
		const getOverlay = (base) => {
			let overlay = document.getElementById("screen_effect_overlay");
			if (!overlay) {
				overlay = document.createElement("div");
				overlay.id = "screen_effect_overlay";
				overlay.classList.add("screen-effect-overlay");
				base.appendChild(overlay);
			}
			if (base.id === "maindisplaybase") base.classList.add("screen-effect-clipped");
			clearScreenEffectTimer(overlay);
			overlay.className = "screen-effect-overlay";
			overlay.style.display = "block";
			overlay.style.pointerEvents = "none";
			overlay.style.opacity = "0";
			overlay.style.transform = "none";
			overlay.style.clipPath = "";
			overlay.style.transition = "none";
			overlay.style.backgroundColor = "transparent";
			overlay.style.mixBlendMode = "";
			overlay.style.backdropFilter = "";
			overlay.style.webkitBackdropFilter = "";
			fitOverlayToPlayArea(overlay, base);
			return overlay;
		}
		const removeOverlay = (overlay, durationMs = 0) => {
			clearScreenEffectTimer(overlay);
			const releaseClip = () => {
				const parent = overlay.parentElement;
				if (parent?.id === "maindisplaybase") parent.classList.remove("screen-effect-clipped");
			}
			if (durationMs <= 0) {
				releaseClip();
				overlay.remove();
				return;
			}
			const timerId = setTimeout(() => {
				if (overlay.dataset.screenEffectTimer !== String(timerId)) return;
				releaseClip();
				overlay.remove();
			}, durationMs);
			overlay.dataset.screenEffectTimer = String(timerId);
		}
		const buildFilter = (setting) => {
			if (setting.filter === "None" || setting.filter === "none") return "";
			if (setting.filter !== undefined) return String(setting.filter);
			const filters = [];
			const brightness = normalizeFilterValue(setting.brightness, "%");
			const blur = normalizeFilterValue(setting.blur, "px");
			const saturate = normalizeFilterValue(setting.saturate, "%");
			if (brightness !== null) filters.push(`brightness(${brightness})`);
			if (blur !== null) filters.push(`blur(${blur})`);
			if (saturate !== null) filters.push(`saturate(${saturate})`);
			return filters.join(" ");
		}
		const setting = parseEffectSetting(rawSetting);
		const effectType = String(setting.type ?? setting.effect ?? "fade");
		const base = getBase();
		if (!base) {
			console.warn("effect_screen: 画面全体エフェクトの対象要素が見つかりません。");
			return finishReturn;
		}
		if (base !== document.body && getComputedStyle(base).position === "static") {
			base.style.position = "relative";
		}
		const duration = toDuration(setting.duration ?? setting.time, effectType === "flash" ? 300 : 500);
		const durationMs = durationToMs(duration);
		const easing = setting.easing || "ease";
		if (effectType === "clear") {
			clearScreenEffectMotion(base);
			const overlay = document.getElementById("screen_effect_overlay");
			if (overlay) {
				overlay.style.transition = durationMs > 0 ? `opacity ${duration} ${easing}` : "none";
				overlay.style.opacity = "0";
				removeOverlay(overlay, durationMs);
			}
			return finishReturn;
		}
		if (effectType === "shake" || effectType === "slide") {
			clearScreenEffectMotion(base);
			if (durationMs <= 0) return finishReturn;
			base.style.setProperty("--screen-effect-duration", duration);
			base.style.setProperty("--screen-effect-easing", easing);
			base.style.setProperty("--screen-effect-count", String(setting.count ?? 1));
			if (effectType === "shake") {
				const shakeX = toCssLength(setting.amountX ?? setting.amount ?? 8);
				const shakeY = toCssLength(setting.amountY ?? 0);
				base.style.setProperty("--screen-effect-shake-x", shakeX);
				base.style.setProperty("--screen-effect-shake-y", shakeY);
				base.style.setProperty("--screen-effect-shake-minus-x", negateCssLength(shakeX));
				base.style.setProperty("--screen-effect-shake-minus-y", negateCssLength(shakeY));
				void base.offsetWidth;
				base.classList.add("screen-effect-shake");
			} else {
				const direction = String(setting.direction ?? "left");
				const distance = toCssLength(setting.distance ?? "100%", "px");
				const slideX = direction === "right" ? distance : direction === "left" ? `-${distance}` : "0";
				const slideY = direction === "down" ? distance : direction === "up" ? `-${distance}` : "0";
				base.style.setProperty("--screen-effect-slide-x", slideX);
				base.style.setProperty("--screen-effect-slide-y", slideY);
				void base.offsetWidth;
				base.classList.add("screen-effect-slide");
			}
			const timerId = setTimeout(() => {
				if (base.dataset.screenEffectTimer !== String(timerId)) return;
				clearScreenEffectMotion(base);
				delete base.dataset.screenEffectTimer;
			}, durationMs);
			clearScreenEffectTimer(base);
			base.dataset.screenEffectTimer = String(timerId);
			return finishReturn;
		}
		const overlay = getOverlay(base);
		const color = setting.color ?? (effectType === "flash" ? "white" : effectType === "filter" ? "transparent" : "black");
		const opacity = setting.opacity ?? 1;
		overlay.style.backgroundColor = String(color);
		overlay.style.mixBlendMode = setting.mixBlendMode ? String(setting.mixBlendMode) : "";
		const filter = buildFilter(setting);
		if (filter) {
			overlay.style.backdropFilter = filter;
			overlay.style.webkitBackdropFilter = filter;
		}
		if (effectType === "flash") {
			if (durationMs <= 0) {
				overlay.remove();
				return finishReturn;
			}
			overlay.style.opacity = String(opacity);
			requestAnimationFrame(() => {
				overlay.style.transition = `opacity ${duration} ${easing}`;
				overlay.style.opacity = "0";
			});
			removeOverlay(overlay, durationMs);
			return finishReturn;
		}
		if (effectType === "wipe") {
			if (durationMs <= 0) {
				overlay.remove();
				return finishReturn;
			}
			const direction = String(setting.direction ?? "right");
			const startTransform = {
				right: "translateX(-100%)",
				left: "translateX(100%)",
				down: "translateY(-100%)",
				up: "translateY(100%)"
			}[direction] || "translateX(-100%)";
			const endTransform = {
				right: "translateX(100%)",
				left: "translateX(-100%)",
				down: "translateY(100%)",
				up: "translateY(-100%)"
			}[direction] || "translateX(100%)";
			overlay.style.opacity = String(opacity);
			overlay.style.transform = startTransform;
			requestAnimationFrame(() => {
				overlay.style.transition = `transform ${duration} ${easing}`;
				overlay.style.transform = endTransform;
			});
			removeOverlay(overlay, durationMs);
			return finishReturn;
		}
		if (effectType !== "fade" && effectType !== "filter" && effectType !== "color") {
			console.warn(`effect_screen: 未対応のtype '${effectType}' です。fadeとして扱います。`);
		}
		overlay.style.transition = durationMs > 0 ? `opacity ${duration} ${easing}, backdrop-filter ${duration} ${easing}` : "none";
		requestAnimationFrame(() => {
			overlay.style.opacity = String(opacity);
		});
		return finishReturn;
	},
	add_html: (args) => {
		const finishReturn = args[0] === "1" ? [1, null] : [0, null];
		const parent_id = args[1];
		const position = args[2] || "beforeend";
		const raw_html = args.slice(3).join(" ");
		const allowedPositions = ["beforeend", "afterbegin", "beforebegin", "afterend"];
		const resolveTargetId = (id) => {
			if (id === "dialogue") return "textcontent";
			return id;
		}
		if (!parent_id) {
			console.warn("add_html: 追加先の親要素idが指定されていません。");
			return finishReturn;
		}
		if (!allowedPositions.includes(position)) {
			console.warn(`add_html: 追加位置 '${position}' は使用できません。beforeend/afterbegin/beforebegin/afterendを指定してください。`);
			return finishReturn;
		}
		if (!raw_html) {
			console.warn("add_html: 追加するHTMLが指定されていません。");
			return finishReturn;
		}
		const parent = document.getElementById(resolveTargetId(parent_id));
		if (!parent) {
			console.warn(`add_html: 追加先 '${parent_id}' が見つかりません。`);
			return finishReturn;
		}
		const template = document.createElement("template");
		template.innerHTML = raw_html;
		if (!template.content.childNodes.length) {
			console.warn("add_html: 追加できるHTML要素がありません。");
			return finishReturn;
		}
		const fragment = template.content.cloneNode(true);
		if (position === "beforeend") {
			parent.appendChild(fragment);
		} else if (position === "afterbegin") {
			parent.insertBefore(fragment, parent.firstChild);
		} else if (position === "beforebegin") {
			if (!parent.parentNode) {
				console.warn(`add_html: '${parent_id}' の前にHTMLを追加できません。`);
				return finishReturn;
			}
			parent.parentNode.insertBefore(fragment, parent);
		} else if (position === "afterend") {
			if (!parent.parentNode) {
				console.warn(`add_html: '${parent_id}' の後にHTMLを追加できません。`);
				return finishReturn;
			}
			parent.parentNode.insertBefore(fragment, parent.nextSibling);
		}
		return finishReturn;
	},
	sympleBGchange: (args) => { //テスト用 パス つける[0/1] 消す[0/1] do_next
		const obj = document.getElementById("gamebg");
		if (args[1] === "1") {
			obj.style.width = "calc(100vh * 9 / 16)";
			obj.style.height = "70%";
			obj.innerHTML = `<img src="${ASSETS.imgs[args[0]]}" style="width: calc(100vh * 9 / 16); height: 100%;"/>`;
		}
		if (args[2] === "1") {
			obj.innerHTML = "";
		}
		return args[3] === "1" ? [1, null] : [0, null];
	},
	console_dispvar: (args) => { //パス do_nextフラグ->テスト用
		const pathString = args[0]
		try {
			// パスを配列に変換（例: "a[1][\"x\"]" → ["a", 1, "x"]）
			const path = parseSetvarPath(pathString);
			const value = GetValueFromsc_var(path);
			console.log(`${pathString} =`, value);
		} catch (e) {
			console.warn(`console_dispvar: パス解析に失敗しました → ${pathString}`, e);
		}
		return args[1] === "1" ? [1, null] : [0, null];
	},
	clear_scline_counter: (args) => {
		scline_counter = [];
		return [1, null];
	},
	disp_text: (args) => { 
			//第一引数 do_nextフラグ
			//第二引数 表示場所[dialogue/console/その他は表示場所のid]
			//第三引数 表示内容(${sc_varの中のパス}でその変数内のデータを文字列に変換したもの、エスケープされてない<は次の>までをhtml要素として扱う。これには対応する</～>が必要となる)
			//第四引数 スタイル設定名(デフォルト値はNone)
			//第五引数 表示名
			//×第六引数 [表示内容に含めたhtml要素のid,適応したいstyle要素]のリスト
			//第六引数 一番上を見る
		//
		const replaceTemplateText = (Text_rtt) => {
			const regex = /(\\\$\{.+?\})|\$\{(.+?)\}/g;
			const result = String(Text_rtt ?? "").replace(regex, (match, escapedText, pathText) => {
				if (escapedText) {
				// \${...} だった場合は、何もせずそのままの文字列（match）を返す
				return escapedText.slice(1);
				}
				if (pathText) {
				// ${...} だった場合は、関数を使って値を取得し、その値で置き換える
				const path = parseSetvarPath(pathText); // pathText には ${} の中身（iなど）が入っている
				const value = GetValueFromsc_var(path);
				if (value === undefined) return "undefined";
				if (value === null) return "null";
				if (typeof value === "object") return JSON.stringify(value);
				return String(value);
				}
			});
			return result;
		}
		
		const apply_setting_text = (setting) => {
			//設定を適応するだけの関数内関数
			//ペンの色の変更
			if (!setting || setting === "None") setting = "None";
			const pen_color = settingsJson?.color?.[setting] ?? settingsJson?.color?.None;
			const pen_svg = ASSETS.svg["material/frame/name_frame.svg"];
			const nameFrame = document.getElementById("name_frame");
			if (!pen_color || !pen_svg || !nameFrame) return;
			if (!/^#[0-9a-fA-F]{3,8}$/.test(pen_color)) {
				console.warn(`disp_text: ${setting} の色設定がカラーコードではありません。`);
				return;
			}
			const new_svg_url = pen_svg.replace(/fill:#[a-fA-F0-9]{3,8};?/g, `fill:${pen_color};`);
			const base64 = btoa(unescape(encodeURIComponent(new_svg_url)));
			nameFrame.src = `data:image/svg+xml;base64,${base64}`;
		}
		
		const parseStyleSetting = (rawStyle) => {
			if (typeof rawStyle === "object" && rawStyle !== null) return rawStyle;
			if (!rawStyle || rawStyle === "None" || rawStyle === "{}") return {};
			try {
				return JSON.parse(rawStyle);
			} catch (error) {
				const trimmed = String(rawStyle).trim();
				if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) {
					console.warn("disp_text: 第六引数のstyle設定を解析できませんでした。", error);
					return {};
				}
				return trimmed.slice(1, -1).split(/[;,]/).reduce((styleObject, pair) => {
					if (!pair) return styleObject;
					const separatorIndex = pair.indexOf(":");
					if (separatorIndex === -1) return styleObject;
					const key = pair.slice(0, separatorIndex).trim();
					const value = pair.slice(separatorIndex + 1).trim();
					if (key && value) styleObject[key] = value;
					return styleObject;
				}, {});
			}
		}

		const applyStyleObject = (target, styleObject) => {
			if (!target || !styleObject || typeof styleObject !== "object") return;
			Object.entries(styleObject).forEach(([key, value]) => {
				if (value === undefined || value === null) return;
				if (key === "class") {
					target.className = String(value);
					return;
				}
				if (key === "addClass") {
					String(value).split(/\s+/).filter(Boolean).forEach(className => target.classList.add(className));
					return;
				}
				if (key === "removeClass") {
					String(value).split(/\s+/).filter(Boolean).forEach(className => target.classList.remove(className));
					return;
				}
				if (key in target.style) {
					target.style[key] = String(value);
				} else {
					target.style.setProperty(key, String(value));
				}
			});
		}

		const applyStyleSetting = (target, rawStyle) => {
			const styleSetting = parseStyleSetting(rawStyle);
			if (Array.isArray(styleSetting)) {
				styleSetting.forEach(([targetId, targetStyle]) => {
					applyStyleObject(document.getElementById(targetId), parseStyleSetting(targetStyle));
				});
				return;
			}
			if (styleSetting.ids && typeof styleSetting.ids === "object") {
				Object.entries(styleSetting.ids).forEach(([targetId, targetStyle]) => {
					applyStyleObject(document.getElementById(targetId), targetStyle);
				});
			}
			if (styleSetting.name && typeof styleSetting.name === "object") {
				applyStyleObject(document.getElementById("charaname"), styleSetting.name);
			}
			if (styleSetting.nameFrame && typeof styleSetting.nameFrame === "object") {
				applyStyleObject(document.getElementById("name_frame"), styleSetting.nameFrame);
			}
			const targetStyle = { ...styleSetting };
			delete targetStyle.ids;
			delete targetStyle.name;
			delete targetStyle.nameFrame;
			delete targetStyle.fadeIn;
			delete targetStyle.fadeInDuration;
			delete targetStyle.fadeInTime;
			delete targetStyle.fadeOut;
			delete targetStyle.fadeOutDuration;
			delete targetStyle.fadeOutTime;
			delete targetStyle.dimInactiveChara;
			delete targetStyle.inactiveCharaBrightness;
			delete targetStyle.inactiveCharaDuration;
			delete targetStyle.inactiveCharaTime;
			delete targetStyle.speakerId;
			applyStyleObject(target, targetStyle);
		}

		const isEnabled = (value, defaultValue = false) => {
			if (value === undefined || value === null) return defaultValue;
			if (typeof value === "boolean") return value;
			return !["0", "false", "False", "FALSE", "None", ""].includes(String(value));
		}

		const isNoneText = (value) => {
			return value === undefined || value === null || String(value) === "None";
		}

		const getDurationMs = (value, defaultSeconds = 0.5) => {
			const durationSeconds = Number(value ?? defaultSeconds);
			if (!Number.isFinite(durationSeconds) || durationSeconds < 0) {
				console.warn(`disp_text: フェード時間 '${value}' が不正です。0秒として扱います。`);
				return 0;
			}
			return durationSeconds * 1000;
		}

		const clearFadeTimer = (target) => {
			if (!target?.dataset?.dispTextFadeTimer) return false;
			clearTimeout(Number(target.dataset.dispTextFadeTimer));
			delete target.dataset.dispTextFadeTimer;
			return true;
		}

		const fadeInElement = (target, durationMs) => {
			if (!target) return;
			const hadFadeTimer = clearFadeTimer(target);
			if (durationMs <= 0) {
				if (hadFadeTimer) target.style.opacity = "1";
				return;
			}
			target.style.transition = "none";
			target.style.opacity = "0";
			requestAnimationFrame(() => {
				target.style.transition = `opacity ${durationMs}ms ease`;
				target.style.opacity = "1";
			});
		}

		const clearElementWithFade = (target, clearFunc, durationMs, fadeOut) => {
			if (!target) return;
			clearFadeTimer(target);
			if (!fadeOut || durationMs <= 0) {
				clearFunc();
				return;
			}
			target.style.transition = `opacity ${durationMs}ms ease`;
			target.style.opacity = "0";
			const timerId = setTimeout(() => {
				clearFunc();
				target.style.transition = "";
				target.style.opacity = "1";
				delete target.dataset.dispTextFadeTimer;
			}, durationMs);
			target.dataset.dispTextFadeTimer = String(timerId);
		}

		const updateInactiveCharaFilter = (styleSetting, defaultEnabled, dimAllChara) => {
			const enabled = isEnabled(styleSetting.dimInactiveChara, defaultEnabled);
			const charaCanvas = document.getElementById("characanvas");
			if (!charaCanvas) return;
			const charaImages = Array.from(charaCanvas.querySelectorAll("img, svg"));
			const resetCharaFilter = () => {
				charaImages.forEach(chara => {
					chara.classList.remove("disp-text-inactive-chara");
					chara.style.removeProperty("--disp-text-inactive-brightness");
					chara.style.removeProperty("--disp-text-chara-filter-duration");
				});
			}
			if (!enabled) {
				resetCharaFilter();
				return;
			}
			const speakerId = String(styleSetting.speakerId ?? args[3] ?? "");
			if (!speakerId || speakerId === "None") {
				resetCharaFilter();
				return;
			}
			const visibleCharaImages = charaImages.filter(chara => getComputedStyle(chara).display !== "none");
			const brightness = String(styleSetting.inactiveCharaBrightness ?? "55%");
			const durationMs = do_inaninstant ? 0 : getDurationMs(styleSetting.inactiveCharaDuration ?? styleSetting.inactiveCharaTime, 0.3);
			if (dimAllChara) {
				visibleCharaImages.forEach(chara => {
					chara.style.setProperty("--disp-text-inactive-brightness", brightness);
					chara.style.setProperty("--disp-text-chara-filter-duration", `${durationMs}ms`);
					chara.classList.add("disp-text-inactive-chara");
				});
				return;
			}
			const activeChara = visibleCharaImages.find(chara => (
				chara.id === speakerId ||
				chara.dataset.charaId === speakerId ||
				chara.dataset.characterId === speakerId
			));
			if (!activeChara) {
				resetCharaFilter();
				return;
			}
			visibleCharaImages.forEach(chara => {
				if (chara === activeChara) {
					chara.classList.remove("disp-text-inactive-chara");
					chara.style.removeProperty("--disp-text-inactive-brightness");
					chara.style.removeProperty("--disp-text-chara-filter-duration");
					return;
				}
				chara.style.setProperty("--disp-text-inactive-brightness", brightness);
				chara.style.setProperty("--disp-text-chara-filter-duration", `${durationMs}ms`);
				chara.classList.add("disp-text-inactive-chara");
			});
		}

		const do_next_flag = args[0] === "1";
		const has_chara_name = !isNoneText(args[4]);
		const clear_dialogue = !["0", "false", "False", "FALSE"].includes(String(args[6] ?? (has_chara_name ? "0" : "1")));
		const styleSetting = parseStyleSetting(args[5]);
		const fadeIn = isEnabled(styleSetting.fadeIn, false) && !do_inaninstant;
		const fadeInDurationMs = getDurationMs(styleSetting.fadeInDuration ?? styleSetting.fadeInTime, 0.5);
		const fadeOut = isEnabled(styleSetting.fadeOut, false) && !do_inaninstant;
		const fadeOutDurationMs = getDurationMs(styleSetting.fadeOutDuration ?? styleSetting.fadeOutTime, 0.5);
		//consoleはここで表示して出ていく
		let disp_area;
		if (args[1] === "console") {
			const disp_content = replaceTemplateText(args[2]);
			console.log(disp_content);
			return args[0] === "1" ? [1, null] : [0, null];
		} else if (args[1] === "dialogue") {
			disp_area = document.getElementById("textcontent");
		} else {
			disp_area = document.getElementById(args[1]);
		}
		if (!disp_area) {
			console.warn(`disp_text: 表示場所 '${args[1]}' が見つかりません。`);
			return do_next_flag ? [1, null] : [0, null];
		}
		const disp_content = replaceTemplateText(args[2]);
		fadeInElement(disp_area, fadeInDurationMs * Number(fadeIn));
		disp_area.innerHTML = disp_content.replace(/\\</g, "&lt;").replace(/\\>/g, "&gt;");
		
		if (args[1] === "dialogue") apply_setting_text(args[3]);
		applyStyleSetting(disp_area, styleSetting);
		updateInactiveCharaFilter(styleSetting, args[1] !== "console", args[1] !== "dialogue" && !has_chara_name);
		let backlogName = "";
		if (has_chara_name) { //名前のルビ
			let text = args[4];
			let convertedText = text.replace(/<([^>:]+):([^>]+)>/g, '<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>');
			const charaName = document.getElementById("charaname");
			if (charaName) {
				fadeInElement(charaName, fadeInDurationMs * Number(fadeIn));
				charaName.innerHTML = convertedText;
			}
			backlogName = text;
		} else {
			const charaName = document.getElementById("charaname");
			clearElementWithFade(charaName, () => { charaName.textContent = ""; }, fadeOutDurationMs, fadeOut);
		}
		if (args[1] !== "dialogue" && clear_dialogue) {
			const textContent = document.getElementById("textcontent");
			clearElementWithFade(textContent, () => { textContent.textContent = ""; }, fadeOutDurationMs, fadeOut);
		}
		if (args[1] === "dialogue") return args[0] === "1" ? [31, [args[3], backlogName]] : [30, [args[3], backlogName]]; //バックログでキャラ名を使用
		return args[0] === "1" ? [1, null] : [0, null];
		////////////////途中
	},
	status_text: (args) => {
		const finishReturn = args[0] === "1" ? [1, null] : [0, null];
		const target_id = args[1];
		const rawSetting = args.slice(2).join(" ");
		const parseTextStatusSetting = (raw) => {
			if (typeof raw === "object" && raw !== null) return raw;
			if (!raw || raw === "None" || raw === "{}") return {};
			const trimmed = String(raw).trim();
			try {
				return JSON.parse(trimmed);
			} catch (error) {
				if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) {
					console.warn("status_text: 第三引数の設定を解析できませんでした。", error);
					return {};
				}
				return trimmed.slice(1, -1).split(/[;,]/).reduce((settingObject, pair) => {
					if (!pair) return settingObject;
					const separatorIndex = pair.indexOf(":");
					if (separatorIndex === -1) return settingObject;
					const key = pair.slice(0, separatorIndex).trim();
					let value = pair.slice(separatorIndex + 1).trim();
					value = value.replace(/^["']|["']$/g, "");
					if (/^-?\d+(\.\d+)?$/.test(value)) value = Number(value);
					if (value === "true") value = true;
					if (value === "false") value = false;
					if (key) settingObject[key] = value;
					return settingObject;
				}, {});
			}
		}
		const toDuration = (value) => {
			if (value === undefined || value === null || value === "None") return "0ms";
			if (typeof value === "number") return `${Math.max(value, 0)}ms`;
			const text = String(value);
			if (/^-?\d+(\.\d+)?$/.test(text)) return `${Math.max(Number(text), 0)}ms`;
			return text;
		}
		const toShakeLength = (value, rate = 1) => {
			if (typeof value === "number") return `${Math.abs(value) * rate}px`;
			const text = String(value);
			if (/^-?\d+(\.\d+)?$/.test(text)) return `${Math.abs(Number(text)) * rate}px`;
			const match = text.match(/^(-?\d+(\.\d+)?)([a-z%]+)$/i);
			if (match) return `${Math.abs(Number(match[1])) * rate}${match[3]}`;
			return rate === 0.5 ? "2px" : "4px";
		}
		const targetMap = {
			dialogue: "textcontent",
			text: "textcontent",
			name: "charaname",
			nameFrame: "name_frame",
			textFrame: "textframe"
		};
		const target = document.getElementById(targetMap[target_id] || target_id);
		if (!target) {
			console.warn(`status_text: 対象 '${target_id}' が見つかりません。`);
			return finishReturn;
		}
		const statusSetting = parseTextStatusSetting(rawSetting);
		target.classList.add("text-status");
		target.style.setProperty("--text-duration", do_inaninstant ? "0ms" : toDuration(statusSetting.duration));
		target.style.setProperty("--text-easing", statusSetting.easing || "ease");
		if (statusSetting.color !== undefined) target.style.color = String(statusSetting.color);
		if (statusSetting.opacity !== undefined) target.style.opacity = String(statusSetting.opacity);
		if (statusSetting.transformOrigin !== undefined) target.style.setProperty("--text-transform-origin", String(statusSetting.transformOrigin));
		if (statusSetting.scale !== undefined) {
			target.style.setProperty("--text-scale-x", String(statusSetting.scale));
			target.style.setProperty("--text-scale-y", String(statusSetting.scale));
		}
		if (statusSetting.scaleX !== undefined) target.style.setProperty("--text-scale-x", String(statusSetting.scaleX));
		if (statusSetting.scaleY !== undefined) target.style.setProperty("--text-scale-y", String(statusSetting.scaleY));
		if (statusSetting.shake !== undefined) {
			if (statusSetting.shake === "0" || statusSetting.shake === false) {
				target.classList.remove("text-shake");
			} else if (do_inaninstant) {
				target.classList.remove("text-shake");
			} else {
				target.style.setProperty("--text-shake-duration", toDuration(statusSetting.shakeDuration ?? statusSetting.duration ?? 500));
				target.style.setProperty("--text-shake-easing", statusSetting.shakeEasing || statusSetting.easing || "ease-in-out");
				target.style.setProperty("--text-shake-count", String(statusSetting.shakeCount ?? 1));
				const shakeBase = typeof statusSetting.shake === "number" ? statusSetting.shake : (statusSetting.shakeAmount ?? 4);
				target.style.setProperty("--text-shake-amount", toShakeLength(shakeBase));
				target.style.setProperty("--text-shake-minus", `-${toShakeLength(shakeBase)}`);
				target.style.setProperty("--text-shake-half-minus", `-${toShakeLength(shakeBase, 0.5)}`);
				target.classList.remove("text-shake");
				void target.offsetWidth;
				target.classList.add("text-shake");
			}
		}
		return finishReturn;
	},
	/*
			第一引数 do_nextフラグ
			第二引数 表示場所[dialogue/console/その他は表示場所のid]
			第三引数 表示内容(${sc_varの中のパス}でその変数内のデータを文字列に変換したもの、エスケープされてない<は次の>までをhtml要素として扱う。これには対応する</～>が必要となる)
			第四引数 スタイル設定名(デフォルト値はNone)
			第五引数 表示名(""で囲む。""なしNoneは表示名を表示しない)
			第六引数 上を見る
	*/
	clearvar: (args) => {
		const do_next = args[0]; // "1" または "0"
		const rawPath = args[1]; // 例: 'a[5]["b"]'
		const setting = args[2]; // "1", "2", "3"
		const pathKeys = parseSetvarPath(rawPath);
		if (!pathKeys || pathKeys.length === 0) {
			return do_next === "1" ? [11, null] : [10, null];
		}
		let current = getScenarioVars();
		for (let i = 0; i < pathKeys.length - 1; i++) {
			const key = pathKeys[i];
			if (current === null || typeof current !== 'object') {
				// 途中のパスが存在しない場合は終了
				return do_next === "1" ? [11, null] : [10, null];
			}
			current = current[key];
		}
		const targetKey = pathKeys[pathKeys.length - 1];
		if (current === null || typeof current !== 'object') {
			return do_next === "1" ? [11, null] : [10, null];
		}

		const setUndefinedRecursive = (obj) => {
			if (obj === null || typeof obj !== 'object') return;
			
			for (const k in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, k)) {
					if (obj[k] !== null && typeof obj[k] === 'object') {
						setUndefinedRecursive(obj[k]);
					} else {
						obj[k] = undefined;
					}
				}
			}
		};

		if (setting === "1") {
			const targetValue = current[targetKey];
			if (targetValue !== null && typeof targetValue === 'object') {
				setUndefinedRecursive(targetValue);
			} else {
				current[targetKey] = undefined;
			}
		} else if (setting === "2") {
			if (Array.isArray(current)) {
				current.splice(Number(targetKey), 1);
			} else {
				delete current[targetKey];
			}
		} else if (setting === "3") {
			current[targetKey] = undefined;
		}

		return do_next === "1" ? [11, null] : [10, null];
	},
	/*
	vibration: (args) => {
		// 1. 本物のバイブレーションを試みる（Android用）
		if (navigator.vibrate) {
			navigator.vibrate(Number(args[1])*1000);
		}

		// 2. 視覚的なバイブレーション（iPhone/PC用）
		const target = document.body;
		
		// すでにクラスがついていたら一旦リセット（連続タップ対策）
		target.classList.remove("vibrate-shake");
		
		// 改めてクラスを付与して揺らす reflow（再レンダリング）
		void target.offsetWidth; 
		target.classList.add("vibrate-shake");

		// 指定時間が経ったら揺れを止める
		setTimeout(() => {
			target.classList.remove("vibrate-shake");
		}, Number(args[1])*1000);
		return args[0] === "1" ? [11, null] : [10, null];
	}, */
	vibration: (args) => {
		const durationMs = Number(args[1]) * 1000; // 秒をミリ秒に変換

		// 1. 本物のバイブレーションを試みる（Android用）
		if (navigator.vibrate) {
			navigator.vibrate(durationMs);
		}

		// 2. 視覚的なバイブレーション（iPhone/PC用）
		const target = document.body;
		target.classList.remove("vibrate-shake");
		void target.offsetWidth; // reflow
		target.classList.add("vibrate-shake");

		setTimeout(() => {
			target.classList.remove("vibrate-shake");
		}, durationMs);

		//  3. 疑似バイブレーション音を鳴らす（iPhone/PC用）
		try {
			const AudioContextClass = window.AudioContext || window.webkitAudioContext;
			if (AudioContextClass) {
				// まだ初期化されていなければ作成
				if (!audioCtx) {
					audioCtx = new AudioContextClass();
				}
				// Safari対策：一時停止状態なら再開させる
				if (audioCtx.state === 'suspended') {
					audioCtx.resume();
				}

				// 音源ノードとボリュームノードの作成
				const oscillator = audioCtx.createOscillator();
				const gainNode = audioCtx.createGain();

				oscillator.type = 'triangle';       // スマホ内蔵スピーカーでも聞こえやすい三角波
				oscillator.frequency.value = 90;    // バイブ特有の「ブー」という重低音（90Hz）

				const startTime = audioCtx.currentTime;
				const endTime = startTime + (durationMs / 1000);

				// 音量設定（鳴り始めは大きく、終わり際にプツッとならないよう一瞬でフェードアウト）
				//gainNode.gain.setValueAtTime(0.8, startTime);
				//gainNode.gain.exponentialRampToValueAtTime(0.001, endTime);
				const startVibTime = audioCtx.currentTime;
				const durationSec = durationMs / 1000; // ミリ秒を秒に変換
				const endVibTime = startTime + durationSec;
				// ※もし全体の長さが0.1秒より短い場合は、全体の1割の時間をフェードアウトに充てる安全弁付き
				const fadeDuration = Math.min(0.1, durationSec * 0.1); 
				const fadeStartTime = endTime - fadeDuration; // フェードアウトを開始する時間

				// --- 音量のタイムラインを設定 ---

				// 1. 鳴り始め：音量を 0.8 にセット
				gainNode.gain.setValueAtTime(0.8, startVibTime);

				// 2. フェードアウト開始直前まで：音量 0.8 をがっちりキープ！
				gainNode.gain.setValueAtTime(0.8, fadeStartTime);

				// 3. 最後のコンマ数秒：一気に 0 まで滑らかに減衰（linearRampを使用）
				// exponentialRampは0にできない仕様（エラーになる）があるため、完全に消音するなら linearRamp が確実
				gainNode.gain.linearRampToValueAtTime(0.0, endVibTime);
				// 配線して再生・停止予約
				oscillator.connect(gainNode);
				gainNode.connect(audioCtx.destination);
				
				oscillator.start(startTime);
				oscillator.stop(endTime); // ここで指定秒数後に止まるよう予約される（非同期）
			}
		} catch (e) {
			console.error("Web Audio API の再生に失敗しました:", e);
		}

		return args[0] === "1" ? [11, null] : [10, null];
	},
	jsRun: (args) => {
		try {
        	// 新しい関数オブジェクトを作って即座に実行する
        	const fn = new Function(args[1]);
			console.log(fn());
		} catch (error) {
			console.error("実行エラー:", error);
		}
		return args[0] === "1" ? [11, null] : [10, null]
	},
	release_arasuzi: (args) => {
		const arasuzi_num = Number(args[1]);
		if (!Number.isInteger(arasuzi_num) || arasuzi_num < 1) {
			console.warn(`release_arasuzi: 解放するあらすじ番号 '${args[1]}' が不正です。`);
			return args[0] === "1" ? [1, null] : [0, null];
		}
		args[1] = arasuzi_num;
		return args[0] === "1" ? [41, Number(args[1])] : [40, Number(args[1])];
	},
	qr: (args) => {
		const qrdiv = document.getElementById("between_frame_and_menu");
		qrdiv.style.backgroundColor = "#FF0000";
		const newButton = document.createElement('button');
		qrdiv.appendChild(newButton);
		newButton.id = "qr_back_button";
		newButton.textContent = "qrを読み取ったことにするボタン";
		document.getElementById("qr_back_button").addEventListener('click', () => {
			qrdiv.classList.remove('is_open');
			qrdiv.innerHTML = "";
		});
		qrdiv.classList.add('is_open');
		return [0, null];
	},
	end: (args) => [-1, null]
};
