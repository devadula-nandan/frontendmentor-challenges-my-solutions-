import { useEffect } from "react";
import { useState } from "react"

export const Clock = () => {
    const [hourAngle, setHourAngle] = useState(0)
    const [minuteAngle, setMinuteAngle] = useState(0)
    // hour effect
    useEffect(() => {
        const interval = setInterval(() => {
            setHourAngle(hourAngle + 1);
        }, 145);
        return () => clearInterval(interval);
    }, [hourAngle]);
    // minute angle
    useEffect(() => {
        const interval = setInterval(() => {
            setMinuteAngle(minuteAngle + 1);
        }, 10);
        return () => clearInterval(interval);
    }, [minuteAngle]);
    return (
        <div className="bg-gray-900 w-screen h-screen flex items-center">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center p-8">
                    <div className="dial rounded-full max-h-80 max-w-80 bg-white sm:h-80 w-80 h-[calc(100vw-64px)]">
                        <div className="face relative h-full w-full">
                            <svg className="p-[4%]" width="100%" viewBox="0 0 274 274" xmlns="http://www.w3.org/2000/svg">
                                <path className=" fill-amber-500 stroke-gray-800" d="M207.993 29.3456L206.347 23.7757C205.592 21.223 202.97 19.7091 200.382 20.3319L194.735 21.6909C192.821 22.1515 191.355 23.6922 190.991 25.6268L188.637 38.1257C187.763 42.77 193.224 45.9233 196.809 42.8437L206.457 34.5557C207.95 33.273 208.551 31.2334 207.993 29.3456Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M66.0068 244.654L67.6534 250.224C68.408 252.777 71.0302 254.291 73.6182 253.668L79.2652 252.309C81.1791 251.848 82.6446 250.308 83.0089 248.373L85.3628 235.874C86.2374 231.23 80.7757 228.077 77.191 231.156L67.5435 239.444C66.0503 240.727 65.4488 242.767 66.0068 244.654Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M252.309 79.2652L253.668 73.6181C254.291 71.0302 252.777 68.408 250.224 67.6534L244.654 66.0068C242.767 65.4487 240.727 66.0503 239.444 67.5435L231.156 77.1909C228.077 80.7757 231.23 86.2374 235.874 85.3627L248.373 83.0089C250.308 82.6446 251.849 81.1791 252.309 79.2652Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M21.6909 194.735L20.3319 200.382C19.7091 202.97 21.223 205.592 23.7757 206.347L29.3456 207.993C31.2334 208.551 33.273 207.95 34.5558 206.456L42.8437 196.809C45.9233 193.224 42.77 187.763 38.1257 188.637L25.6268 190.991C23.6922 191.355 22.1515 192.821 21.6909 194.735Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M244.654 207.993L250.224 206.347C252.777 205.592 254.291 202.97 253.668 200.382L252.309 194.735C251.848 192.821 250.308 191.355 248.373 190.991L235.874 188.637C231.23 187.763 228.077 193.224 231.156 196.809L239.444 206.456C240.727 207.95 242.767 208.551 244.654 207.993Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M29.3456 66.0068L23.7757 67.6534C21.223 68.408 19.7091 71.0302 20.3319 73.6181L21.6909 79.2652C22.1515 81.1791 23.6922 82.6446 25.6268 83.0089L38.1257 85.3628C42.77 86.2374 45.9233 80.7757 42.8437 77.1909L34.5558 67.5435C33.273 66.0503 31.2334 65.4487 29.3456 66.0068Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M194.735 252.309L200.382 253.668C202.97 254.291 205.592 252.777 206.347 250.224L207.993 244.654C208.551 242.767 207.95 240.727 206.457 239.444L196.809 231.156C193.224 228.077 187.763 231.23 188.637 235.874L190.991 248.373C191.355 250.308 192.821 251.848 194.735 252.309Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M79.2652 21.6909L73.6182 20.3319C71.0302 19.7091 68.408 21.223 67.6534 23.7757L66.0068 29.3456C65.4488 31.2334 66.0503 33.273 67.5435 34.5557L77.191 42.8437C80.7757 45.9233 86.2374 42.77 85.3628 38.1257L83.0089 25.6268C82.6446 23.6922 81.1791 22.1515 79.2652 21.6909Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M135.401 34H138.599C140.925 34 142.944 32.3962 143.47 30.1306L148.577 8.13065C149.305 4.9959 146.924 2 143.706 2H130.294C127.076 2 124.695 4.9959 125.423 8.13064L130.53 30.1306C131.056 32.3962 133.075 34 135.401 34Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M240 135.401V138.599C240 140.925 241.604 142.944 243.869 143.47L265.869 148.577C269.004 149.305 272 146.924 272 143.706V130.294C272 127.076 269.004 124.695 265.869 125.423L243.869 130.53C241.604 131.056 240 133.075 240 135.401Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M138 137C138 137.552 137.552 138 137 138C136.448 138 136 137.552 136 137C136 136.448 136.448 136 137 136C137.552 136 138 136.448 138 137Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M34 138.599V135.401C34 133.075 32.3962 131.056 30.1306 130.53L8.13065 125.423C4.9959 124.695 2 127.076 2 130.294V143.706C2 146.924 4.9959 149.305 8.13064 148.577L30.1306 143.47C32.3962 142.944 34 140.925 34 138.599Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M138.599 240H135.401C133.075 240 131.056 241.604 130.53 243.869L125.423 265.869C124.695 269.004 127.076 272 130.294 272H143.706C146.924 272 149.305 269.004 148.577 265.869L143.47 243.869C142.944 241.604 140.925 240 138.599 240Z" />
                                <path className=" fill-amber-500 stroke-gray-800" d="M206.347 23.7757L207.785 23.3504L207.785 23.3504L206.347 23.7757ZM207.993 29.3456L206.555 29.7709L206.555 29.7709L207.993 29.3456ZM206.457 34.5557L205.479 33.4179L205.479 33.4179L206.457 34.5557ZM196.809 42.8437L197.787 43.9815L197.787 43.9815L196.809 42.8437ZM188.637 38.1257L190.111 38.4033L190.111 38.4033L188.637 38.1257ZM190.991 25.6268L192.465 25.9044L190.991 25.6268ZM194.735 21.6909L195.086 23.1493L195.086 23.1493L194.735 21.6909ZM200.382 20.3319L200.031 18.8736L200.031 18.8736L200.382 20.3319ZM67.6534 250.224L66.215 250.65L67.6534 250.224ZM66.0068 244.654L67.4453 244.229L67.4453 244.229L66.0068 244.654ZM67.5435 239.444L68.521 240.582L68.521 240.582L67.5435 239.444ZM77.191 231.156L76.2135 230.019L76.2135 230.019L77.191 231.156ZM85.3628 235.874L83.8887 235.597L83.8887 235.597L85.3628 235.874ZM83.0089 248.373L81.5349 248.096L81.5349 248.096L83.0089 248.373ZM79.2652 252.309L78.9142 250.851L78.9142 250.851L79.2652 252.309ZM73.6182 253.668L73.9691 255.126L73.9691 255.126L73.6182 253.668ZM253.668 73.6181L252.21 73.2672L252.21 73.2672L253.668 73.6181ZM252.309 79.2652L253.767 79.6161L253.767 79.6161L252.309 79.2652ZM248.373 83.0089L248.651 84.483L248.651 84.483L248.373 83.0089ZM235.874 85.3627L236.152 86.8368L235.874 85.3627ZM231.156 77.1909L230.019 76.2135L230.019 76.2135L231.156 77.1909ZM239.444 67.5435L240.582 68.5209L240.582 68.5209L239.444 67.5435ZM244.654 66.0068L245.08 64.5683L245.08 64.5683L244.654 66.0068ZM250.224 67.6534L250.65 66.2149L250.65 66.2149L250.224 67.6534ZM20.3319 200.382L21.7903 200.733L20.3319 200.382ZM21.6909 194.735L23.1493 195.086L23.1493 195.086L21.6909 194.735ZM25.6268 190.991L25.3492 189.517L25.3492 189.517L25.6268 190.991ZM38.1257 188.637L38.4033 190.111L38.4033 190.111L38.1257 188.637ZM42.8437 196.809L43.9815 197.787L43.9815 197.787L42.8437 196.809ZM34.5558 206.456L33.418 205.479L33.418 205.479L34.5558 206.456ZM29.3456 207.993L29.7709 206.555L29.7709 206.555L29.3456 207.993ZM23.7757 206.347L23.3504 207.785L23.3504 207.785L23.7757 206.347ZM250.224 206.347L250.65 207.785L250.65 207.785L250.224 206.347ZM244.654 207.993L244.229 206.555L244.229 206.555L244.654 207.993ZM239.444 206.456L240.582 205.479L240.582 205.479L239.444 206.456ZM231.156 196.809L230.019 197.787L230.019 197.787L231.156 196.809ZM235.874 188.637L236.152 187.163L236.152 187.163L235.874 188.637ZM248.373 190.991L248.096 192.465L248.096 192.465L248.373 190.991ZM252.309 194.735L250.851 195.086L250.851 195.086L252.309 194.735ZM253.668 200.382L255.126 200.031L255.126 200.031L253.668 200.382ZM23.7757 67.6534L24.2009 69.0919L24.2009 69.0919L23.7757 67.6534ZM29.3456 66.0068L28.9204 64.5683L29.3456 66.0068ZM34.5558 67.5435L35.6936 66.566L35.6936 66.566L34.5558 67.5435ZM42.8437 77.1909L41.7059 78.1684L41.7059 78.1684L42.8437 77.1909ZM38.1257 85.3628L38.4033 83.8887L38.4033 83.8887L38.1257 85.3628ZM25.6268 83.0089L25.9044 81.5348L25.9044 81.5348L25.6268 83.0089ZM21.6909 79.2652L20.2326 79.6161L20.2326 79.6161L21.6909 79.2652ZM20.3319 73.6181L21.7903 73.2672L21.7903 73.2672L20.3319 73.6181ZM200.382 253.668L200.733 252.21L200.733 252.21L200.382 253.668ZM194.735 252.309L194.384 253.767L194.384 253.767L194.735 252.309ZM190.991 248.373L192.465 248.096L192.465 248.096L190.991 248.373ZM188.637 235.874L187.163 236.152L187.163 236.152L188.637 235.874ZM196.809 231.156L195.832 232.294L195.832 232.294L196.809 231.156ZM206.457 239.444L207.434 238.306L207.434 238.306L206.457 239.444ZM207.993 244.654L206.555 244.229L206.555 244.229L207.993 244.654ZM206.347 250.224L207.785 250.65L207.785 250.65L206.347 250.224ZM73.6182 20.3319L73.2672 21.7903L73.2672 21.7903L73.6182 20.3319ZM79.2652 21.6909L79.6162 20.2325L79.6162 20.2325L79.2652 21.6909ZM83.0089 25.6268L84.483 25.3492L84.483 25.3492L83.0089 25.6268ZM85.3628 38.1257L83.8887 38.4033L83.8887 38.4033L85.3628 38.1257ZM77.191 42.8437L78.1684 41.7059L78.1684 41.7059L77.191 42.8437ZM67.5435 34.5557L68.521 33.4179L68.521 33.4179L67.5435 34.5557ZM66.0068 29.3456L64.5684 28.9204L64.5684 28.9204L66.0068 29.3456ZM67.6534 23.7757L66.215 23.3504L66.215 23.3504L67.6534 23.7757ZM130.53 30.1306L129.069 30.4698L129.069 30.4698L130.53 30.1306ZM125.423 8.13064L123.962 8.46984L123.962 8.46984L125.423 8.13064ZM148.577 8.13065L150.038 8.46984L150.038 8.46984L148.577 8.13065ZM143.47 30.1306L142.009 29.7915L142.009 29.7915L143.47 30.1306ZM243.869 130.53L243.53 129.069L243.53 129.069L243.869 130.53ZM265.869 125.423L265.53 123.962L265.53 123.962L265.869 125.423ZM265.869 148.577L265.53 150.038L265.53 150.038L265.869 148.577ZM243.869 143.47L244.209 142.009L244.209 142.009L243.869 143.47ZM30.1306 143.47L30.4698 144.931L30.4698 144.931L30.1306 143.47ZM8.13064 148.577L8.46984 150.038L8.46984 150.038L8.13064 148.577ZM2 130.294H0.5H2ZM8.13065 125.423L8.46984 123.962L8.46984 123.962L8.13065 125.423ZM30.1306 130.53L29.7915 131.991L29.7915 131.991L30.1306 130.53ZM143.47 243.869L144.931 243.53L144.931 243.53L143.47 243.869ZM148.577 265.869L150.038 265.53L150.038 265.53L148.577 265.869ZM125.423 265.869L123.962 265.53L123.962 265.53L125.423 265.869ZM130.53 243.869L131.991 244.209L131.991 244.209L130.53 243.869ZM204.908 24.2009L206.555 29.7709L209.432 28.9204L207.785 23.3504L204.908 24.2009ZM205.479 33.4179L195.832 41.7059L197.787 43.9815L207.434 35.6935L205.479 33.4179ZM190.111 38.4033L192.465 25.9044L189.517 25.3492L187.163 37.8481L190.111 38.4033ZM195.086 23.1493L200.733 21.7903L200.031 18.8736L194.384 20.2325L195.086 23.1493ZM192.465 25.9044C192.72 24.5502 193.746 23.4717 195.086 23.1493L194.384 20.2325C191.896 20.8313 189.991 22.8343 189.517 25.3492L192.465 25.9044ZM195.832 41.7059C193.322 43.8616 189.499 41.6543 190.111 38.4033L187.163 37.8481C186.026 43.8857 193.126 47.985 197.787 43.9815L195.832 41.7059ZM206.555 29.7709C206.945 31.0923 206.524 32.52 205.479 33.4179L207.434 35.6935C209.375 34.0259 210.157 31.3745 209.432 28.9204L206.555 29.7709ZM207.785 23.3504C206.804 20.032 203.395 18.0639 200.031 18.8736L200.733 21.7903C202.544 21.3543 204.38 22.4141 204.908 24.2009L207.785 23.3504ZM69.0919 249.799L67.4453 244.229L64.5684 245.08L66.215 250.65L69.0919 249.799ZM68.521 240.582L78.1684 232.294L76.2135 230.019L66.566 238.306L68.521 240.582ZM83.8887 235.597L81.5349 248.096L84.483 248.651L86.8369 236.152L83.8887 235.597ZM78.9142 250.851L73.2672 252.21L73.9691 255.126L79.6161 253.767L78.9142 250.851ZM81.5349 248.096C81.2798 249.45 80.254 250.528 78.9142 250.851L79.6161 253.767C82.1042 253.169 84.0094 251.166 84.483 248.651L81.5349 248.096ZM78.1684 232.294C80.6778 230.138 84.5009 232.346 83.8887 235.597L86.8369 236.152C87.9739 230.114 80.8737 226.015 76.2135 230.019L78.1684 232.294ZM67.4453 244.229C67.0546 242.908 67.4757 241.48 68.521 240.582L66.566 238.306C64.6249 239.974 63.8429 242.625 64.5684 245.08L67.4453 244.229ZM66.215 250.65C67.196 253.968 70.6048 255.936 73.9691 255.126L73.2672 252.21C71.4556 252.646 69.6201 251.586 69.0919 249.799L66.215 250.65ZM252.21 73.2672L250.851 78.9142L253.767 79.6161L255.126 73.9691L252.21 73.2672ZM248.096 81.5348L235.597 83.8887L236.152 86.8368L248.651 84.483L248.096 81.5348ZM232.294 78.1684L240.582 68.5209L238.306 66.566L230.019 76.2135L232.294 78.1684ZM244.229 67.4453L249.799 69.0919L250.65 66.2149L245.08 64.5683L244.229 67.4453ZM240.582 68.5209C241.48 67.4757 242.908 67.0546 244.229 67.4453L245.08 64.5683C242.625 63.8428 239.974 64.6249 238.306 66.566L240.582 68.5209ZM235.597 83.8887C232.346 84.5009 230.138 80.6777 232.294 78.1684L230.019 76.2135C226.015 80.8737 230.114 87.9739 236.152 86.8368L235.597 83.8887ZM250.851 78.9142C250.528 80.2539 249.45 81.2798 248.096 81.5348L248.651 84.483C251.166 84.0094 253.169 82.1042 253.767 79.6161L250.851 78.9142ZM255.126 73.9691C255.936 70.6048 253.968 67.1959 250.65 66.2149L249.799 69.0919C251.586 69.6201 252.646 71.4556 252.21 73.2672L255.126 73.9691ZM21.7903 200.733L23.1493 195.086L20.2326 194.384L18.8736 200.031L21.7903 200.733ZM25.9044 192.465L38.4033 190.111L37.8481 187.163L25.3492 189.517L25.9044 192.465ZM41.7059 195.832L33.418 205.479L35.6936 207.434L43.9815 197.787L41.7059 195.832ZM29.7709 206.555L24.2009 204.908L23.3504 207.785L28.9204 209.432L29.7709 206.555ZM33.418 205.479C32.52 206.524 31.0923 206.945 29.7709 206.555L28.9204 209.432C31.3745 210.157 34.0259 209.375 35.6936 207.434L33.418 205.479ZM38.4033 190.111C41.6543 189.499 43.8616 193.322 41.7059 195.832L43.9815 197.787C47.985 193.126 43.8857 186.026 37.8481 187.163L38.4033 190.111ZM23.1493 195.086C23.4717 193.746 24.5502 192.72 25.9044 192.465L25.3492 189.517C22.8343 189.991 20.8313 191.896 20.2326 194.384L23.1493 195.086ZM18.8736 200.031C18.0639 203.395 20.032 206.804 23.3504 207.785L24.2009 204.908C22.4141 204.38 21.3543 202.544 21.7903 200.733L18.8736 200.031ZM249.799 204.908L244.229 206.555L245.08 209.432L250.65 207.785L249.799 204.908ZM240.582 205.479L232.294 195.832L230.019 197.787L238.306 207.434L240.582 205.479ZM235.597 190.111L248.096 192.465L248.651 189.517L236.152 187.163L235.597 190.111ZM250.851 195.086L252.21 200.733L255.126 200.031L253.767 194.384L250.851 195.086ZM248.096 192.465C249.45 192.72 250.528 193.746 250.851 195.086L253.767 194.384C253.169 191.896 251.166 189.991 248.651 189.517L248.096 192.465ZM232.294 195.832C230.138 193.322 232.346 189.499 235.597 190.111L236.152 187.163C230.114 186.026 226.015 193.126 230.019 197.787L232.294 195.832ZM244.229 206.555C242.908 206.945 241.48 206.524 240.582 205.479L238.306 207.434C239.974 209.375 242.625 210.157 245.08 209.432L244.229 206.555ZM250.65 207.785C253.968 206.804 255.936 203.395 255.126 200.031L252.21 200.733C252.646 202.544 251.586 204.38 249.799 204.908L250.65 207.785ZM24.2009 69.0919L29.7709 67.4453L28.9204 64.5683L23.3504 66.2149L24.2009 69.0919ZM33.418 68.5209L41.7059 78.1684L43.9815 76.2135L35.6936 66.566L33.418 68.5209ZM38.4033 83.8887L25.9044 81.5348L25.3492 84.483L37.8481 86.8368L38.4033 83.8887ZM23.1493 78.9142L21.7903 73.2672L18.8736 73.9691L20.2326 79.6161L23.1493 78.9142ZM25.9044 81.5348C24.5502 81.2798 23.4717 80.2539 23.1493 78.9142L20.2326 79.6161C20.8313 82.1042 22.8343 84.0094 25.3492 84.483L25.9044 81.5348ZM41.7059 78.1684C43.8616 80.6777 41.6543 84.5009 38.4033 83.8887L37.8481 86.8368C43.8857 87.9739 47.985 80.8737 43.9815 76.2135L41.7059 78.1684ZM29.7709 67.4453C31.0923 67.0546 32.52 67.4757 33.418 68.5209L35.6936 66.566C34.0259 64.6249 31.3745 63.8429 28.9204 64.5683L29.7709 67.4453ZM23.3504 66.2149C20.032 67.1959 18.0639 70.6048 18.8736 73.9691L21.7903 73.2672C21.3543 71.4556 22.4141 69.6201 24.2009 69.0919L23.3504 66.2149ZM200.733 252.21L195.086 250.851L194.384 253.767L200.031 255.126L200.733 252.21ZM192.465 248.096L190.111 235.597L187.163 236.152L189.517 248.651L192.465 248.096ZM195.832 232.294L205.479 240.582L207.434 238.306L197.787 230.019L195.832 232.294ZM206.555 244.229L204.908 249.799L207.785 250.65L209.432 245.08L206.555 244.229ZM205.479 240.582C206.524 241.48 206.945 242.908 206.555 244.229L209.432 245.08C210.157 242.625 209.375 239.974 207.434 238.306L205.479 240.582ZM190.111 235.597C189.499 232.346 193.322 230.138 195.832 232.294L197.787 230.019C193.126 226.015 186.026 230.114 187.163 236.152L190.111 235.597ZM195.086 250.851C193.746 250.528 192.72 249.45 192.465 248.096L189.517 248.651C189.991 251.166 191.896 253.169 194.384 253.767L195.086 250.851ZM200.031 255.126C203.395 255.936 206.804 253.968 207.785 250.65L204.908 249.799C204.38 251.586 202.544 252.646 200.733 252.21L200.031 255.126ZM73.2672 21.7903L78.9142 23.1493L79.6162 20.2325L73.9691 18.8736L73.2672 21.7903ZM81.5349 25.9044L83.8887 38.4033L86.8369 37.8481L84.483 25.3492L81.5349 25.9044ZM78.1684 41.7059L68.521 33.4179L66.566 35.6935L76.2135 43.9815L78.1684 41.7059ZM67.4453 29.7709L69.0919 24.2009L66.215 23.3504L64.5684 28.9204L67.4453 29.7709ZM68.521 33.4179C67.4757 32.52 67.0546 31.0923 67.4453 29.7709L64.5684 28.9204C63.8429 31.3745 64.6249 34.0259 66.566 35.6935L68.521 33.4179ZM83.8887 38.4033C84.5009 41.6543 80.6778 43.8616 78.1684 41.7059L76.2135 43.9815C80.8737 47.985 87.9739 43.8857 86.8369 37.8481L83.8887 38.4033ZM78.9142 23.1493C80.254 23.4717 81.2798 24.5502 81.5349 25.9044L84.483 25.3492C84.0094 22.8343 82.1042 20.8313 79.6162 20.2325L78.9142 23.1493ZM73.9691 18.8736C70.6048 18.0639 67.196 20.032 66.215 23.3504L69.0919 24.2009C69.6201 22.4141 71.4556 21.3543 73.2672 21.7903L73.9691 18.8736ZM138.599 32.5H135.401V35.5H138.599V32.5ZM131.991 29.7915L126.884 7.79145L123.962 8.46984L129.069 30.4698L131.991 29.7915ZM130.294 3.5H143.706V0.5H130.294V3.5ZM147.116 7.79145L142.009 29.7915L144.931 30.4698L150.038 8.46984L147.116 7.79145ZM143.706 3.5C145.959 3.5 147.625 5.59713 147.116 7.79145L150.038 8.46984C150.984 4.39467 147.89 0.5 143.706 0.5V3.5ZM126.884 7.79145C126.375 5.59713 128.041 3.5 130.294 3.5V0.5C126.11 0.5 123.016 4.39467 123.962 8.46984L126.884 7.79145ZM135.401 32.5C133.773 32.5 132.36 31.3774 131.991 29.7915L129.069 30.4698C129.753 33.4151 132.377 35.5 135.401 35.5V32.5ZM138.599 35.5C141.623 35.5 144.247 33.4151 144.931 30.4698L142.009 29.7915C141.64 31.3774 140.227 32.5 138.599 32.5V35.5ZM241.5 138.599V135.401H238.5V138.599H241.5ZM244.209 131.991L266.209 126.884L265.53 123.962L243.53 129.069L244.209 131.991ZM270.5 130.294V143.706H273.5V130.294H270.5ZM266.209 147.116L244.209 142.009L243.53 144.931L265.53 150.038L266.209 147.116ZM270.5 143.706C270.5 145.959 268.403 147.625 266.209 147.116L265.53 150.038C269.605 150.984 273.5 147.89 273.5 143.706H270.5ZM266.209 126.884C268.403 126.375 270.5 128.041 270.5 130.294H273.5C273.5 126.11 269.605 123.016 265.53 123.962L266.209 126.884ZM241.5 135.401C241.5 133.773 242.623 132.36 244.209 131.991L243.53 129.069C240.585 129.753 238.5 132.377 238.5 135.401H241.5ZM238.5 138.599C238.5 141.623 240.585 144.247 243.53 144.931L244.209 142.009C242.623 141.64 241.5 140.227 241.5 138.599H238.5ZM136.5 137C136.5 136.724 136.724 136.5 137 136.5V139.5C138.381 139.5 139.5 138.381 139.5 137H136.5ZM137 136.5C137.276 136.5 137.5 136.724 137.5 137H134.5C134.5 138.381 135.619 139.5 137 139.5V136.5ZM137.5 137C137.5 137.276 137.276 137.5 137 137.5V134.5C135.619 134.5 134.5 135.619 134.5 137H137.5ZM137 137.5C136.724 137.5 136.5 137.276 136.5 137H139.5C139.5 135.619 138.381 134.5 137 134.5V137.5ZM32.5 135.401V138.599H35.5V135.401H32.5ZM29.7915 142.009L7.79145 147.116L8.46984 150.038L30.4698 144.931L29.7915 142.009ZM3.5 143.706V130.294H0.5V143.706H3.5ZM7.79145 126.884L29.7915 131.991L30.4698 129.069L8.46984 123.962L7.79145 126.884ZM3.5 130.294C3.5 128.041 5.59713 126.375 7.79145 126.884L8.46984 123.962C4.39467 123.016 0.5 126.11 0.5 130.294H3.5ZM7.79145 147.116C5.59713 147.625 3.5 145.959 3.5 143.706H0.5C0.5 147.89 4.39467 150.984 8.46984 150.038L7.79145 147.116ZM32.5 138.599C32.5 140.227 31.3774 141.64 29.7915 142.009L30.4698 144.931C33.4151 144.247 35.5 141.623 35.5 138.599H32.5ZM35.5 135.401C35.5 132.377 33.4151 129.753 30.4698 129.069L29.7915 131.991C31.3774 132.36 32.5 133.773 32.5 135.401H35.5ZM135.401 241.5H138.599V238.5H135.401V241.5ZM142.009 244.209L147.116 266.209L150.038 265.53L144.931 243.53L142.009 244.209ZM143.706 270.5H130.294V273.5H143.706V270.5ZM126.884 266.209L131.991 244.209L129.069 243.53L123.962 265.53L126.884 266.209ZM130.294 270.5C128.041 270.5 126.375 268.403 126.884 266.209L123.962 265.53C123.016 269.605 126.11 273.5 130.294 273.5V270.5ZM147.116 266.209C147.625 268.403 145.959 270.5 143.706 270.5V273.5C147.89 273.5 150.984 269.605 150.038 265.53L147.116 266.209ZM138.599 241.5C140.227 241.5 141.64 242.623 142.009 244.209L144.931 243.53C144.247 240.585 141.623 238.5 138.599 238.5V241.5ZM135.401 238.5C132.377 238.5 129.753 240.585 129.069 243.53L131.991 244.209C132.36 242.623 133.773 241.5 135.401 241.5V238.5Z" fill="black" />
                            </svg>
                            <div className={"hour mx-auto relative -top-[calc(50%+0.5px)] w-[8%] opacity-50 bg-red-400 rounded-full"} style={{transform: `rotate(${hourAngle}deg)`}}>
                                <svg className="absolute -bottom-[6px] left-0" width="100%" viewBox="0 0 26 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 81C7 77.6863 9.68629 75 13 75C16.3137 75 19 77.6863 19 81C19 84.3137 16.3137 87 13 87C9.68629 87 7 84.3137 7 81Z" fill="#FF0000" />
                                    <path d="M6.5 35.5C2.54559 52.5925 2.54745 61.7264 6.50018 79L9.12119 76.3788C9.37261 76.1274 9.65643 75.9106 9.96515 75.7342L11.0154 75.134C12.2452 74.4313 13.7548 74.4313 14.9846 75.134L16.035 75.7343C16.3436 75.9106 16.6274 76.1274 16.8787 76.3787L19.5002 79C23.5692 61.7717 23.5699 52.6378 19.5 35.5L15.0964 38.2099C13.8108 39.0011 12.1892 39.0011 10.9036 38.2099L6.5 35.5Z" fill="#FF0000" />
                                    <path d="M3.12259 32.7144L10.4866 38.6624C11.9529 39.8467 14.0471 39.8467 15.5134 38.6624L22.8774 32.7144C24.1577 31.6803 24.6739 29.9676 24.1783 28.3982L16.8143 5.07872C15.6373 1.35142 10.3627 1.35142 9.18568 5.07872L1.82163 28.3982C1.32603 29.9675 1.84227 31.6803 3.12259 32.7144Z" fill="#FF0000" />
                                    <path d="M7 81C7 77.6863 9.68629 75 13 75C16.3137 75 19 77.6863 19 81C19 84.3137 16.3137 87 13 87C9.68629 87 7 84.3137 7 81Z" stroke="black" stroke-width="3" />
                                    <path d="M6.5 35.5C2.54559 52.5925 2.54745 61.7264 6.50018 79L9.12119 76.3788C9.37261 76.1274 9.65643 75.9106 9.96515 75.7342L11.0154 75.134C12.2452 74.4313 13.7548 74.4313 14.9846 75.134L16.035 75.7343C16.3436 75.9106 16.6274 76.1274 16.8787 76.3787L19.5002 79C23.5692 61.7717 23.5699 52.6378 19.5 35.5L15.0964 38.2099C13.8108 39.0011 12.1892 39.0011 10.9036 38.2099L6.5 35.5Z" stroke="black" stroke-width="3" />
                                    <path d="M3.12259 32.7144L10.4866 38.6624C11.9529 39.8467 14.0471 39.8467 15.5134 38.6624L22.8774 32.7144C24.1577 31.6803 24.6739 29.9676 24.1783 28.3982L16.8143 5.07872C15.6373 1.35142 10.3627 1.35142 9.18568 5.07872L1.82163 28.3982C1.32603 29.9675 1.84227 31.6803 3.12259 32.7144Z" stroke="black" stroke-width="3" />
                                </svg>
                            </div>
                            <div className={"minute mx-auto relative -top-[calc(50%-1.5px)] w-[8%] opacity-50 bg-red-400 rounded-full"} style={{ transform: `rotate(${minuteAngle}deg)` }}>
                                <svg className="absolute -bottom-[6px] left-0" width="100%" viewBox="0 0 22 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 108.5C4.5 104.91 7.41015 102 11 102C14.5898 102 17.5 104.91 17.5 108.5C17.5 112.09 14.5898 115 11 115C7.41015 115 4.5 112.09 4.5 108.5Z" fill="#0085FF" />
                                    <path d="M4.49999 27.5C1.83918 58.045 1.85293 75.236 4.49999 106C6.66296 103.162 8.05797 102.223 10.6981 102.02C10.8986 102.004 11.1011 102.009 11.3009 102.032C13.9284 102.337 15.3319 103.234 17.5 106C20.1824 75.3454 20.2019 58.1579 17.5 27.5L13.4388 30.624C12.001 31.73 9.99896 31.73 8.56115 30.624L4.49999 27.5Z" fill="#0085FF" />
                                    <path d="M3.43796 26.1304L8.17158 30.864C9.73367 32.4261 12.2663 32.4261 13.8284 30.864L18.562 26.1304C19.5711 25.1213 19.9662 23.651 19.5988 22.2721L14.8652 4.50632C13.81 0.546125 8.19003 0.546135 7.13485 4.50633L2.40124 22.2721C2.03382 23.651 2.42888 25.1213 3.43796 26.1304Z" fill="#0085FF" />
                                    <path d="M4.5 108.5C4.5 104.91 7.41015 102 11 102C14.5898 102 17.5 104.91 17.5 108.5C17.5 112.09 14.5898 115 11 115C7.41015 115 4.5 112.09 4.5 108.5Z" stroke="black" stroke-width="3" />
                                    <path d="M4.49999 27.5C1.83918 58.045 1.85293 75.236 4.49999 106C6.66296 103.162 8.05797 102.223 10.6981 102.02C10.8986 102.004 11.1011 102.009 11.3009 102.032C13.9284 102.337 15.3319 103.234 17.5 106C20.1824 75.3454 20.2019 58.1579 17.5 27.5L13.4388 30.624C12.001 31.73 9.99896 31.73 8.56115 30.624L4.49999 27.5Z" stroke="black" stroke-width="3" />
                                    <path d="M3.43796 26.1304L8.17158 30.864C9.73367 32.4261 12.2663 32.4261 13.8284 30.864L18.562 26.1304C19.5711 25.1213 19.9662 23.651 19.5988 22.2721L14.8652 4.50632C13.81 0.546125 8.19003 0.546135 7.13485 4.50633L2.40124 22.2721C2.03382 23.651 2.42888 25.1213 3.43796 26.1304Z" stroke="black" stroke-width="3" />
                                </svg>
                            </div>
                            <div className="center-dot bg-green-400 rounded-full w-1 h-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}