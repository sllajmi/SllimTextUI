RegisterNetEvent('SllimTextUI:OpenUI')
AddEventHandler('SllimTextUI:OpenUI', function(message, color)
	OpenUI(message, color)
end)

function OpenUI(message, color)
	SendNUIMessage({
		action = 'openUI',
		message = message,
		color = color,
	})
end

RegisterNetEvent('SllimTextUI:CloseUI')
AddEventHandler('SllimTextUI:CloseUI', function()
	CloseUI()
end)

function CloseUI()
	SendNUIMessage({
		action = 'closeUI'
	})
end

--EXAMPLE (you can remove this)

RegisterCommand('textui', function ()
	exports['SllimTextUI']:OpenUI('[E] - This is a test', 'white')
end)

RegisterCommand('textuipurple', function ()
	exports['SllimTextUI']:OpenUI('[E] - This is a test', 'purple')
end)

RegisterCommand('textuigreen', function ()
	exports['SllimTextUI']:OpenUI('[E] - This is a test', 'green')
end)

RegisterCommand('textuired', function ()
	exports['SllimTextUI']:OpenUI('[E] - This is a test', 'red')
end)

RegisterCommand('closetextui', function ()
	exports['SllimTextUI']:CloseUI()
end)
