output "resource_group" {
  value = azurerm_resource_group.main.name
}

output "swa_name" {
  value = azurerm_static_web_app.main.name
}

output "swa_default_hostname" {
  value = azurerm_static_web_app.main.default_host_name
}

output "swa_api_key" {
  value     = azurerm_static_web_app.main.api_key
  sensitive = true
}

output "ai_connection_string" {
  value     = azurerm_application_insights.main.connection_string
  sensitive = true
}
