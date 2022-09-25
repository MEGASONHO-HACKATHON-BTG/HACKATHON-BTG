from django import template

register = template.Library()

@register.filter
def cpf(value: int) -> str:
    cpf = '{}.{}.{}-{}'.format(value[:3], value[3:6], value[6:9], value[9:])
    return cpf
