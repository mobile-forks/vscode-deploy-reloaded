/**
 * This file is part of the vscode-deploy-reloaded distribution.
 * Copyright (c) Marcel Joachim Kloubert.
 * 
 * vscode-deploy-reloaded is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU Lesser General Public License as   
 * published by the Free Software Foundation, version 3.
 *
 * vscode-deploy-reloaded is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import * as deploy_values from './values';


 /**
 * A code execution context.
 */
export interface CodeExecutionContext<TContext = any> {
    /**
     * The code to execute.
     */
    readonly code: string;
    /**
     * The context.
     */
    readonly context?: TContext;
    /**
     * One or more values.
     */
    readonly values?: deploy_values.Value | deploy_values.Value[];
}


/**
 * Execute code.
 * 
 * @param {any} code The code to execute.
 * 
 * @return {TResult} The result of the execution.
 */
export function exec<TResult = any, TContext = any>(context: CodeExecutionContext<TContext>): TResult {
    if (!context) {
        return;
    }
    
    const $h = require('./helpers');
    const $r = (id) => {
        return $h.requireFromExtension(id);
    };
    const $v = deploy_values.toValueStorage(context.values);

    return eval(
        $h.toStringSafe(context.code)
    );
}
